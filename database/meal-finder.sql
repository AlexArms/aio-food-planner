DROP DATABASE IF EXISTS meal-finder;

CREATE DATABASE meal-finder;

\c meal-finder;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(20) NOT NULL,
  user_password VARCHAR(50) NOT NULL,
  pin INT NOT NULL,
  saved_meals TEXT[]
);
