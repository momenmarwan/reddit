BEGIN;
DROP  TABLE IF EXISTS users, posts , comments CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY  KEY,
    username VARCHAR(25) NOT NULL UNIQUE,
    password VARCHAR(300) NOT NULL UNIQUE,
    email VARCHAR(30) NOT NULL UNIQUE
);

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    img_url TEXT,
    voting INTEGER,
    comments_number INTEGER,
    post_data TIMESTAMP NOT NULL  DEFAULT NOW(),
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    content text,
    voting INTEGER,
    comment_data TIMESTAMP NOT NULL  DEFAULT NOW(),
    post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE
);
COMMIT;