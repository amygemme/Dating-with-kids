DROP DATABASE IF EXISTS dating_poolDB;
CREATE DATABASE dating_poolDB;

CREATE TABLE dating (
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(40) NOT NULL,
    last_name VARCHAR(40) NOT NULL,
    email VARCHAR(40) NOT NULL,
    num_kids INT NOT NULL,
    age VARCHAR(40) NOT NULL,
    custody VARCHAR(40) NOT NULL,
    gender_self VARCHAR(20) NOT NULL,
    gender_match VARCHAR(20)NOT NULL,
    interest VARCHAR(40)NOT NULL,
    zip_code VARCHAR(40)NOT NULL,
    primary key(id)
);


