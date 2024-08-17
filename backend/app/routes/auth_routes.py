from flask import Blueprint, jsonify, request
from ..models import User
from .. import db # import db from __init__.py
from werkzeug.security import generate_password_hash, check_password_hash # handle password hashing

auth = Blueprint('auth', __name__)

# Register
@auth.route('/register', method=['POST'])
def register():
  data = request.get_json()
  
  print("Recieved data: ", data)
  
  hash_password = generate_password_hash(password=data['password'])
  new_user = User(
      username=data['username'], 
      email=data['email'],
      password=hash_password,
      address=data['address'],
      phone=data['phone']
    )
  
  db.session.add(new_user)
  db.session.commit()
  return jsonify({'message': 'User created successfully'}), 201

# Login
@auth.route('/login', method=['POST'])
def login():
  data = request.get_json()
  
  print(f"Recieved login data: ", data)
  
  user = User.query.filter_by(username=data['username']).first()
  
  if not user or not check_password_hash(password=data['password']):
    return jsonify({'message': 'Invalid username or password!'}), 401
  
  return jsonify({'message': 'Login successful', 'user_id': user.id}), 200

# Reset password
@auth.route('/reset_password', method=['POST'])
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
  