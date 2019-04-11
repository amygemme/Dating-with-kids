DROP DATABASE IF EXISTS dating_poolDB;
CREATE DATABASE dating_poolDB;

CREATE TABLE dating (
    id INTEGER AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(40) NOT NULL,
    last_name VARCHAR(40) NOT NULL,
    email VARCHAR(40) NOT NULL,
    num_kids INT NOT NULL,
    age INTEGER NOT NULL,
    custody VARCHAR(40) NOT NULL,
    match_man BOOLEAN NOT NULL,
    match_woman BOOLEAN NOT NULL,
    match_nonbinary BOOLEAN NOT NULL,
    fun BOOLEAN NOT NULL,
    support BOOLEAN NOT NULL,
    love BOOLEAN NOT NULL,
    unkown BOOLEAN NOT NULL,
    zip_code VARCHAR(40)NOT NULL,
    gender_self VARCHAR(20) NOT NULL,
    primary key(id)
);

USE dating_poolDB;

