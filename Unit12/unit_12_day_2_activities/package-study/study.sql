-- Create a new Database
CREATE DATABASE name_db; -- call your db whatever you want

USE name_db;
-- Create a new table with a primary key that auto-increments, and a text field

CREATE TABLE whatever (

  id integer auto_increment not null,

  textField VARCHAR(255) NOT NULL,

  primary key(id)

);


-- Insert 3 Rows into your new table

INSERT INTO whatever (textField)
VALUES ("Ahmed is a nice guy. He likes vanilla icecream with his soup");

INSERT INTO whatever (textField)
VALUES ("Ahmed is not a nice guy. He likes vanilla icecream with his soup");

INSERT INTO whatever (textField)
VALUES ("Ahmed again, is a pretty cool guy. But he likes chocolate icecream.");

SELECT * FROM whatever;