from flask import Blueprint, jsonify, request
from ..models import Category, Product
from .. import db 
from sqlalchemy.exc import SQLAlchemyError

product = Blueprint('product', __name__)

@product.route('/all', methods=['GET'])
def get_all_products():
  try:
    products = Product.query.all()
    if not products:
      return jsonify({'message': 'Cannot get products'})
    
    categories = Category.query.all()
    if not categories:
      return jsonify({'message': 'Cannot get categories'})
    
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
    
    return jsonify({
      'message': 'Successfully retrieved all products',
      'products': product_list, 
      'categories': category_list
    })
    
  except SQLAlchemyError as e:
    # Catch SQL Alchemy error
    return jsonify({'message': 'An error occurred while retrieving the products'}), 500
  except Exception as e:
    # Catch any other unexpected exceptions
    return jsonify({"error": str(e)}), 500
  

#! Routes: Get products by category
@product.route('/category', method=['POST'])
def get_products_by_category():
  data = request.get_json()
  
  category = data.get('category')
  if not category:
    return jsonify({'message': 'Category is required'}), 400
  
  try:
    # Retrieve the category by name
    category_obj = Category.query.filter_by(category_name=category).first()
    if not category_obj:
      return jsonify({'message': "Category not found"}), 404
    
    # Retrieve products by category ID
    products = Product.query.filter_by(categoryId=category_obj.categoryId).all()
    if not products:
      return jsonify({'message': f"No products found in the {category} category"}), 404

    # Prepare product list for response
    product_list = [{
      'product_id': product.productId,
      'product_name': product.productName,
      'category_id': product.categoryId,
      'product_price': product.price,
      'product_quantity': product.stockQuantity,
      'product_description': product.description,
      'product_image': product.image
    } for product in products]
    
    return jsonify({
      'message': f"Successfully retrieved products in the {category} category", 
      'products': product_list
    }), 200

    
  except SQLAlchemyError as e:
    # Log the exception for debugging purposes
    print(f"Error retrieving products: {e}")
    return jsonify({'message': 'An error occurred while retrieving the products'}), 500
  
  except Exception as e:
    # Catch any other unexpected exceptions
    print(f"Unexpected error: {e}")
    return jsonify({'message': "An unexpected error occurred"}), 500
  
  
