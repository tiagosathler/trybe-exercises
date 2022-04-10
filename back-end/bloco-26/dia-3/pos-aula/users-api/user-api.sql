CREATE DATABASE IF NOT EXISTS users_api;

USE users_api;

CREATE TABLE IF NOT EXISTS users
(
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
    `password` VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO
    users (first_name, last_name, email, `password`)
VALUES
    ('Machado', 'de Assis', 'deassis@gmail.com', 'trybe12345'),
    ('Clarice', 'Lispector', 'lispector@gmail.com', '8575227246');          