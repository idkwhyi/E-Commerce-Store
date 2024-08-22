from flask import Flask
from flask_sqlalchemy import SQLAlchemy #type: ignore
from flask_login import LoginManager
from flask_cors import CORS
from flask_migrate import Migrate
import jwt

db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    CORS(app)

    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:@localhost:3306/Native'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # Initialize the database
    db.init_app(app)
    migrate.init_app(app, db)

    # Automaticly creating the models
    with app.app_context():
      from .models import User, Category, Product, Review, Order, OrderDetail
      db.create_all()

    # Register Blueprints
    from .routes.auth_routes import auth

    app.register_blueprint(auth, url_prefix='/auth')


    return app