DROP DATABASE IF EXISTS snack_a_log;
CREATE DATABASE snack_a_log;
\c snack_a_log;
CREATE TABLE snacks (
id SERIAL PRIMARY KEY,
name TEXT, required
image TEXT,
fiber INT, default 0
protein INT, default 0
added_sugar INT, default 0
is_healthy BOOLEAN
);