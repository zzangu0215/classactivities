DROP DATABASE IF EXISTS top_songsDB;
CREATE DATABASE top_songsDB;
USE top_songsDB;
CREATE TABLE top5000 (
  position INT NOT NULL,
  artist VARCHAR(100) NOT NULL,
  song VARCHAR(100) NOT NULL,
  year INT NOT NULL,
  raw_total DECIMAL(10, 4),
  raw_usa DECIMAL(10, 4),
  raw_uk DECIMAL(10, 4),
  raw_eur DECIMAL(10, 4),
  raw_row DECIMAL(10, 4),
  PRIMARY KEY (position)
);