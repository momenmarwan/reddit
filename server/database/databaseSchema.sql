BEGIN;
DROP  TABLE IF EXISTS users, posts , comments,post_votes,comments_votes CASCADE;

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
    comments_number INTEGER,
    post_date TIMESTAMP NOT NULL  DEFAULT NOW(),
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    content text,
    comment_date TIMESTAMP NOT NULL  DEFAULT NOW(),
    post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
    user_id = INTEGER REFERENCES users(id) ON DELETE CASCADE
);
CREATE TABLE post_votes(
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
    CONSTRAINT unique_combination_post UNIQUE (user_id, post_id)
);

CREATE TABLE comments_votes(
    id SERIAL PRIMARY KEY,
    comment_id INTEGER REFERENCES comments(id) ON DELETE CASCADE,
    post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
    CONSTRAINT unique_combination_comment UNIQUE (comment_id, post_id)
);
COMMIT;