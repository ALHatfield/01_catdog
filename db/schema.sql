### Schema

CREATE DATABASE cat_db;
USE cat_db;

CREATE TABLE cats
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	sleepy BOOLEAN DEFAULT false,
    breed varchar(255),
    age INT NOT NULL,
    dateAdded DATETIME DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);