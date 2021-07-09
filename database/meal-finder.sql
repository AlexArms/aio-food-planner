DROP DATABASE IF EXISTS aio;

CREATE DATABASE aio;

\c aio;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(20) UNIQUE NOT NULL,
  user_password VARCHAR(50) NOT NULL,
  pin INT DEFAULT NULL,
  saved_meals TEXT[]
);

CREATE INDEX users_username ON users(username);
