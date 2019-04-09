CREATE TABLE population (
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(40) NOT NULL,
    last_name VARCHAR(40) NOT NULL,
    email VARCHAR(40) NOT NULL,
    age VARCHAR(40),
    number_of_kids INT,
    kids VARCHAR(40),
    zip_code VARCHAR(40),
    type_of_relationship VARCHAR(40),
    primary key(id)
);


INSERT INTO population (first_name, last_name, email, age, number_of_kids, kids, zip_code, type_of_relationship)
VALUES ("Gene", "Genoa", "ggenoa@gmail.com", 43, 3, "", 94583, serious);
INSERT INTO population (first_name, last_name, email, age, number_of_kids, kids, zip_code, type_of_relationship)
VALUES ("Sean", "Seamus", "seamm@gmail.com", 28, 1, "", 94583, casual);
INSERT INTO population (first_name, last_name, email, age, number_of_kids, kids, zip_code, type_of_relationship)
VALUES ("Layla", "Lal", "ll@gmail.com", 30, 2, "", 94583, casual);
INSERT INTO population (first_name, last_name, email, age, number_of_kids, kids, zip_code, type_of_relationship)
VALUES ("Pam", "Popper", "pamop@gmail.com", 36, 2, "", 94583, serious);