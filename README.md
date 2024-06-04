# E-Commerce-Backend Project

## Description

This project is a fully functional Express.js API designed to manage a database using Sequelize and MySQL. The API supports CRUD operations (Create, Read, Update, Delete) for categories, products, and tags. This document details the steps to set up, run, and test the application.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/markhom/E-Commerce-Backend 
Navigate to the project directory:

```bash
cd your-repo-name
Install the necessary packages:
```

```bash
npm install
Create a .env file in the root of your project and add your database credentials:
```

```env
DB_NAME=your_database_name
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
```
## Usage
Create the development database and seed it with test data:

```bash
Copy code
npm run schema
npm run seed
```

Start the server and sync Sequelize models to the MySQL database:

```bash
Copy code
npm start
The server will start on http://localhost:3001.
```

## API Endpoints
Categories
GET /api/categories

Returns all categories in JSON format.
GET /api/categories/

Returns a single category by ID in JSON format.
POST /api/categories

Creates a new category.
PUT /api/categories/

Updates a category by ID.
DELETE /api/categories/

Deletes a category by ID.
Products
GET /api/products

Returns all products in JSON format.
GET /api/products/

Returns a single product by ID in JSON format.
POST /api/products

Creates a new product.
PUT /api/products/

Updates a product by ID.
DELETE /api/products/

Deletes a product by ID.
Tags
GET /api/tags

Returns all tags in JSON format.
GET /api/tags/

Returns a single tag by ID in JSON format.
POST /api/tags

Creates a new tag.
PUT /api/tags/

Updates a tag by ID.
DELETE /api/tags/

Deletes a tag by ID.
Testing
You can test the API endpoints using Postman or any other API client.

Open Postman.

Test the GET routes for categories, products, and tags:

GET /api/categories
GET /api/products
GET /api/tags
Test the POST, PUT, and DELETE routes to create, update, and delete data in the database.

## Technologies Used
Node.js
Express.js
MySQL
Sequelize
dotenv

## License
This project is licensed under the MIT License. See the LICENSE file for details.