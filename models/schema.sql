DROP DATABASE IF EXISTS dating_poolDB;
CREATE DATABASE dating_poolDB;

CREATE TABLE population (
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(40) NOT NULL,
    last_name VARCHAR(40) NOT NULL,
    email VARCHAR(40) NOT NULL,
    age VARCHAR(40),
    number_of_kids INT,
    type_of_relationship VARCHAR(40),
    primary key(id)
);


