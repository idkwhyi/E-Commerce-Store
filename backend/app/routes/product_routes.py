from flask import Blueprint, jsonify, request
from ..models import Category, Product
from .. import db 

product = Blueprint('product', __name__)

@product.route('/all', methods=['GET'])
def get_all():
  try:
    products = Product.query.all()
    categories = Category.query.all()
    
    category_list = [{
      'category_id': category.categoryId,
      'category_name': category.categoryName
    } for category in categories]
    
    product_list = [{
      'product_id': product.productId,
      'product_name': product.productName ,
      'category_id': product.categoryId,
      'product_price': product.price,
      'product_quantity': product.stockQuantity,
      'product_description': product.description,
      'product_image': product.image
      
    } for product in products]
    
    return jsonify({'products': product_list, 'categories': category_list})
    
  except Exception as e:
    return jsonify({"error": str(e)}), 500