from flask import Blueprint, jsonify, request
from ..models import User
from .. import db, guard # import from __init__.py
from werkzeug.security import generate_password_hash, check_password_hash # handle password hashing

auth = Blueprint('auth', __name__)

# Register
@auth.route('/register', methods=['POST'])
def register():
  data = request.get_json()
  
  print("Recieved data: ", data)
  
  existing_by_username = User.query.filter_by(username=data['username']).first()
  existing_by_email = User.query.filter_by(email=data['email']).first()
  
  if existing_by_username:
    return jsonify({'message': 'Username already exists'}), 400
  
  if existing_by_email:
    return jsonify({'message': 'Email is already been used'}), 400
  
  hashed_password = guard.hash_password(data['password'])
  print("hashed password: ", hashed_password)
  # Create a new user
  new_user = User(
    username=data['username'],
    email=data['email'],
    password=hashed_password,
    address=data['address'],
    phone=data['phone'],
    roles=','.join(data['roles'])  # Convert list of roles to a comma-separated string
  )
  db.session.add(new_user)
  db.session.commit()
    
  return jsonify({'message': 'User registered successfully'}), 201

# Login
@auth.route('/login', methods=['POST'])
def login():
  data = request.get_json()
  
  print('Received login data:', data)

  user = User.query.filter_by(username=data['username']).first()
    
  if not user or not check_password_hash(user.password, data['password']):
    return jsonify({'message': 'Invalid username or password'}), 401
  
  return jsonify({
    'message': 'Login successful', 
    'user_id': user.userId, 
    'username': user.username,
    'email': user.email,
    'address': user.address,
    'phone': user.phone
  }), 200 

# Reset password
@auth.route('/reset_password', methods=['POST'])
def reset_password():
  data = request.get_json()
  username=data.get('username')
  email=data.get('email')
  new_password=data.get('password')
  
  user = User.query.filter_by(username=username, email=email).first()
  
  if not user:
    return jsonify({'message': 'Invalid username or email!'}), 404
  
  user_password = generate_password_hash(new_password)
  db.session.commit()
  return jsonify({'message': 'Password reset successfully'}), 200
  