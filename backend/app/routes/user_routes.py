from flask import Blueprint, jsonify, request
from ..models import User
from .. import db

user = Blueprint('user', __name__)

# Get Username
@user.route('/username', methods=['POST'])
def get_username():
  data = request.get_json()
  print("Recieved data: ", data)
  
  user_id = data['id']
  