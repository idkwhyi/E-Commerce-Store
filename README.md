# Native - Eco Friendly Product Ecommerce
Native is an e-commerce website that focuses on eco-friendly products. Native allows customers to discover and purchase a variety of sustainable products, ranging from home appliances to decorative accessories. Equipped with a user login feature that implements JWT, but for now I have not added a payment feature, EcoShop ensures a convenient and reliable shopping process. This project is built using React for the frontend, Flask as the backend, as well as integration with Unsplash as a product image reference.

## Project Goals
This project aims to improve skills in full-stack web development and expand understanding of the integration between frontend and backend. In addition, this project is designed to develop the ability to use modern technologies such as React, Flask, and JWT-based authentication system. Through the creation of this e-commerce, I hope to:
- Improve skills in database management.
- Master best practices in developing scalable and responsive web applications.
- Sharpen problem-solving skills through the application of REST API concepts and user authentication.

## Feature
Listed below are the main features of this e-commerce website project (many features have not been listed because it is in the development stage ).
- User authentication using JWT
- Adding items to the shopping cart
- Filter products by category


# Installation

## 1. Clone Repository
First, clone your project repository to a local computer:
```bash
git clone https://github.com/idkwhyi/E-Commerce-Store
cd E-Commerce-Store
```

## 2. Backend Installation

### 1. Create Virtual Environment
Inside the backend directory, create and activate a virtual environment to isolate backend dependencies:
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # For MacOS/Linux
   venv\Scripts\activate      # For Windows
   ```

### 2. Install Flask Dependencies
   Install all libraries required for the backend (listed in `requirements.txt`):
   ```bash
   pip install -r requirements.txt
   ```

### 3. Database Setup
Native uses mysql as its database, make sure you have

#### 1. Create Database
   Create a database in mysql with the name Native
   ```
   CREATE DATABASE NATIVE   
   ```
   
#### 2. Connect Flask to MySQL
   Make sure the database configuration in the Flask file (`backend/app/__init__.py`) is correct, for example:
   ```python
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:@localhost:3306/Native'

   ```

### 3. Run The Backend (Flask)
   Once creating the database and all the libraries are installed, run the Flask server by typing:
   ```bash
   flask run
   ```

  By default, Flask will run at `http://127.0.0.1:5000/`.


## 3. Frontend Installation

### 1. Move to the Frontend Directory
   ```bash
   cd ../frontend
   ```

### 2. Install React Dependencies
   Install all the libraries required by the React frontend ( listed in `package.json`):
   ```bash
   npm install
   ```

### 3. Run the Frontend (React)
   Once the dependencies are installed, run the React app:
   ```bash
   npm start
   ```

   React will run at `http://localhost:3000/`.

## Tech Stack

**Frontend:** React, TailwindCSS

**Backend:** Python, Flask


## Contributing

Contributions are always welcome!

