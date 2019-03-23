-- TODO: add a date joined column and match the dog data so that react can pull the same data.

### Schema

CREATE DATABASE cat_db;
USE cat_db;

CREATE TABLE cats
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	sleepy BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);



INSERT INTO cats (name) VALUES ('Meeses');
INSERT INTO cats (name) VALUES ('Bobbi');
INSERT INTO cats (name, sleepy) VALUES ('Sylvester', true);
INSERT INTO cats (name, sleepy) VALUES ('Marilyn Manson', true);
INSERT INTO cats (name, sleepy) VALUES ('Joe Biden', true);
INSERT INTO cats (name, sleepy) VALUES ('Lyra', false);
INSERT INTO cats (name, sleepy) VALUES ('Lily', true);








