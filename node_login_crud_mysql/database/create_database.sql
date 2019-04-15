CREATE DATABASE IF NOT EXISTS crud_links;

USE crud_links;

/* User table */
CREATE TABLE IF NOT EXISTS users(
    ID              INT(5) NOT NULL,
    Username        VARCHAR(15) NOT NULL,
    Password        VARCHAR(255) NOT NULL,
    Fullname        VARCHAR(100) NOT NULL
)ENGINE='InnoDB';

ALTER TABLE users ADD CONSTRAINT PRIMARY KEY(ID);

ALTER TABLE users MODIFY ID INT(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESC users;

/* Links Table */
CREATE TABLE IF NOT EXISTS links(
    ID              INT(5) NOT NULL,
    User_id         INT(5),
    Title           VARCHAR(150) NOT NULL,
    Url             VARCHAR(255) NOT NULL,
    Description     TEXT,
    Created_at      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_links_users FOREIGN KEY(User_id) REFERENCES users(ID)
)ENGINE='InnoDB';

ALTER TABLE links ADD CONSTRAINT pk_links PRIMARY KEY(ID);
ALTER TABLE links MODIFY ID INT(5) NOT NULL AUTO_INCREMENT;
ALTER TABLE links MODIFY User_id INT(5);