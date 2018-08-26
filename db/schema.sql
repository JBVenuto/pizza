-- Make the database to hold the pizza table
DROP DATABASE IF EXISTS pizza_db;
CREATE DATABASE pizza_db;
USE pizza_db;

-- Make the table to hold the pizza information
CREATE TABLE pizza
(
    id INT NOT NULL AUTO_INCREMENT,
    pizza_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);