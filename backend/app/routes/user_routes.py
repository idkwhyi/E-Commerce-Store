from flask import Blueprint, jsonify, request
from ..models import User
from .. import db

user = Blueprint('user', __name__)

# Get Username
@user.route('/userData', methods=['POST'])
def get_username():
  data = request.get_json()
  print("Recieved data -- user_routes: ", data)
  
  user_id = data.get('id')
  print('user id - user_routes: ', user_id)
  
  if not user_id:
    return jsonify({'message': 'User ID is required'}), 400
  
  user = User.query.filter_by(userId=user_id).first()
  
  if user:
    return jsonify({
      'message': 'Success Get User Data' ,
      'username': user.username,
      'email': user.email,
      'address': user.address,
      'phone': user.phone,
    }), 200
  
  return jsonify({'message': 'User not found'}), 401
  