CREATE DATABASE greatBay_DB;
USE greatBay_DB;
CREATE TABLE auctions (
  id INT NOT NULL AUTO_INCREMENT,
  item_name VARCHAR(200) NOT NULL,
  category VARCHAR(30) NOT NULL,
  starting_bid INT default 0,
  highest_bid INT default 0,
  PRIMARY KEY (id)
);
SELECT * FROM auctions;