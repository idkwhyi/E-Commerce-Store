from sqlalchemy import (
  Column, 
  String, 
  ForeignKey, 
  Numeric, 
  Integer, 
  CheckConstraint, 
  DateTime
)
from sqlalchemy.dialects.mysql import CHAR
from sqlalchemy.orm import relationship
from datetime import datetime
import uuid
from . import db

class User(db.Model):
  __tablename__ = 'user'  # Explicitly define the table name
  userId = db.Column(CHAR(36), primary_key=True, default=lambda: str(uuid.uuid4()), unique=True, nullable=False)
  username = db.Column(String(200), unique=True, nullable=False)
  email = db.Column(String(150), unique=True, nullable=False)
  password = db.Column(String(255), nullable=False)
  address = db.Column(String(255), nullable=False)
  phone = db.Column(String(100), nullable=False)
  roles = db.Column(String(255))
  is_active = db.Column(db.Boolean, default=True)
  
  reviews = relationship('Review', back_populates='user')
  orders = relationship('Order', back_populates='user')
  
  def __repr__(self):
    return f'<User: {self.username}, Email: {self.email}>'
  
  @property
  def roles_name(self):
    if self.roles:
      return self.roles.split(',')
    return []
  
  @property
  def rolenames(self):
    return self.roles_name
  
  @classmethod
  def lookup(cls, username):
    return cls.query.filter_by(username=username).one_or_none()
  
  @classmethod
  def identify(cls, id):
    return cls.query.get(id)
  
  @property
  def identity(self):
    return self.userId
  
  def is_valid(self):
    return self.is_active

class Category(db.Model):
  __tablename__ = 'category'
  categoryId = db.Column(CHAR(36), primary_key=True, default=lambda: str(uuid.uuid4()), unique=True, nullable=False)
  categoryName = db.Column(String(200), unique=True, nullable=False)

  products = relationship('Product', back_populates='category')

class Product(db.Model):
  __tablename__ = 'product'
  productId = db.Column(CHAR(36), primary_key=True, default=lambda: str(uuid.uuid4()), unique=True, nullable=False)
  productName = db.Column(String(200), unique=True, nullable=False)
  categoryId = db.Column(CHAR(36), ForeignKey('category.categoryId'))
  price = db.Column(Numeric(10, 2), nullable=False)
  stockQuantity = db.Column(Integer, nullable=False)
  description = db.Column(db.String(255), nullable=False)
  image = db.Column(db.String(255))

  category = relationship('Category', back_populates='products')
  reviews = relationship('Review', back_populates='product')
  orderDetails = relationship('OrderDetail', back_populates='product')

class Review(db.Model):
  __tablename__ = 'review'
  reviewId = db.Column(CHAR(36), primary_key=True, default=lambda: str(uuid.uuid4()), unique=True, nullable=False)
  productId = db.Column(CHAR(36), ForeignKey('product.productId'))
  userId = db.Column(CHAR(36), ForeignKey('user.userId'))
  rating = db.Column(Integer, CheckConstraint('rating >= 1 AND rating <= 5'), nullable=False)
  comment = db.Column(String(255), nullable=True)

  product = relationship('Product', back_populates='reviews')
  user = relationship('User', back_populates='reviews')

  
class Order(db.Model):
  __tablename__ = 'order'
  orderId = db.Column(CHAR(36), primary_key=True, default=lambda: str(uuid.uuid4()), unique=True, nullable=False)
  userId = db.Column(CHAR(36), ForeignKey('user.userId'))
  orderDate = db.Column(DateTime, default=datetime.now, nullable=False)
  
  user = relationship('User', back_populates='orders')
  orderDetails = relationship('OrderDetail', back_populates='order')
  
class OrderDetail(db.Model):
  __tablename__ = 'orderDetail'
  OrderDetailId = db.Column(CHAR(36), primary_key=True, default=lambda: str(uuid.uuid4), unique=True, nullable=False)
  orderId = db.Column(CHAR(36), ForeignKey('order.orderId'))
  productId = db.Column(CHAR(36), ForeignKey('product.productId'))
  quantity = db.Column(Integer, nullable=False)
  price = db.Column(Numeric(10,2), nullable=False)
  
  order = relationship('Order', back_populates='orderDetails')
  product = relationship('Product', back_populates='orderDetails')