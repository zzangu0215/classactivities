DROP DATABASE IF EXISTS favorite_db;
-- Creates the "favorite_db" database --
CREATE DATABASE favorite_db;
-- Make it so all of the following code will affect favorite_db --
use favorite_db;
-- Creates the table "favorite_foods" within favorite_db --
CREATE TABLE favorite_foods (
  -- Make a string column called "food" which cannot contain null --
    food varchar(100) not null,
  -- Make an numeric column called "score" --
    score integer
);
CREATE TABLE favorite_songs (
  -- Make a string column called "song" which cannot contain null --
  song varchar(100) not null,
  -- Make a string column called "artist" --
  artist varchar(100),
  -- Make an integer column called "score" --
  score integer(10)
);
CREATE TABLE favorite_movies (
  -- Create a numeric column called "id" which automatically increments and cannot be null --
  id integer not null auto_increment,
  -- Create a string column called "movie" which cannot be null --
  movie varchar(100) not null,
  -- Create a boolean column called "five_times" that sets the default value to false if nothing is entered --
  five_times boolean default false,
  -- Make an integer column called "score" --
  score integer,
  -- Set the primary key of the table to id --
  primary key (id)
);
INSERT INTO favorite_foods (food, score)
VALUES ("apple", 70);
INSERT INTO favorite_foods (food, score)
VALUES ("banana", 80);
INSERT INTO favorite_foods (food, score)
VALUES ("iced tea", 0);
INSERT INTO favorite_foods (food, score)
VALUES ("avocado", 100);
INSERT INTO favorite_songs (song, artist, score)
VALUES ("avocado", "fruit guys", 23);
INSERT INTO favorite_songs (song, artist, score)
VALUES ("Dare", "gorillaz", 98);
INSERT INTO favorite_songs (song, artist, score)
VALUES ("we will rock you", "Queen", 101);
INSERT INTO favorite_movies (id, movie, five_times, score)
VALUES (12, "Avengers", true, 95);
INSERT INTO favorite_movies (id, movie, five_times, score)
VALUES (13, "Tomorrow War", true, 88);
INSERT INTO favorite_movies (id, movie, five_times, score)
VALUES (20, "Little Mermaid", false, 89);
INSERT INTO favorite_movies (id, movie, five_times, score)
VALUES (02, "Jumanji", true, 90);

SELECT * FROM favorite_foods;

UPDATE favorite_foods 
SET score = 91 
WHERE food = "avocado";

DELETE FROM favorite_foods
WHERE food = "iced tea";
