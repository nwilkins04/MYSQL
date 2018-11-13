CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
item_id INT AUTO_INCREMENT,
product_name VARCHAR(20),
department_name VARCHAR(20),
price DECIMAL(10,2),
stock_quantity INT,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("t-shirt", "clothing", 15.67, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("snowboard", "sports equipment", 500.89, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("labtop", "technology", 957.25, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("cookies", "food", 5.84, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("vodka", "alcohol", 19.67, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("dress", "clothing", 25.62, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("hockey puck", "sports equipment", 10.47, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("TV", "techology", 368.35, 13);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("cheese", "food", 23.63, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("rum", "alcohol", 24.53, 26);