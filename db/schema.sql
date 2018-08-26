-- Make the database to hold the pizza table
CREATE DATABASE pizza_db;
USE pizza-db;

-- Make the table to hold the pizza information
CREATE TABLE pizza
(
    id INT NOT NULL AUTO-INCREMENT,
    pizza_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);