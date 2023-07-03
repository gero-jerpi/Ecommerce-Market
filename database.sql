CREATE DATABASE IF NOT EXISTS ecommercemarket;
USE ecommercemarket;

CREATE TABLE users (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(300) UNIQUE,
    user VARCHAR(50) UNIQUE,
    password VARCHAR(50)
);

INSERT INTO users (user, password) 
VALUES
("admin", 123);

SELECT * FROM users;
