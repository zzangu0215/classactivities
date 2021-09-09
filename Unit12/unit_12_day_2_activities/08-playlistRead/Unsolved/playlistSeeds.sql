DROP DATABASE IF EXISTS playlistDB;
CREATE DATABASE playlistDB;

USE playlistDB;

CREATE TABLE songs(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NULL,
  artist VARCHAR(45) NULL,
  genre VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

-- TODO: Add a few more songs.
INSERT INTO songs (title, artist, genre)
VALUES ("Who's Next", "The Who", "Rock");

INSERT INTO songs (title, artist, genre)
VALUES 
  ("Stairway to Heaven", "Led Zepplin", "Rock"),
  ("alive", "Daft Punk", "Electronic"),
  ("Regulate", "Warren G", "Hip Hop");

