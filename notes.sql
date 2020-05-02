DROP DATABASE IF EXISTS `heroku_48a1f21dcef3b30`;
CREATE DATABASE `heroku_48a1f21dcef3b30`;
USE `heroku_48a1f21dcef3b30`; 

CREATE TABLE user (
    id INTEGER  AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255)  NOT NULL,
       email VARCHAR(255)  NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);



