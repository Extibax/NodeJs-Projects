CREATE DATABASE IF NOT EXISTS crud_links;

USE crud_links;

CREATE TABLE IF NOT EXISTS users(
    id              INT(5) NOT NULL AUTO_INCREMENT,
    username        VARCHAR(15) NOT NULL,
    password        VARCHAR(255) NOT NULL,
    fullname        VARCHAR(100) NOT NULL,
    CONSTRAINT pk_users PRIMARY KEY(id)
)ENGINE='InnoDB';

CREATE TABLE IF NOT EXISTS links(
    id              INT(5) NOT NULL AUTO_INCREMENT,
    user_id         INT(5) NOT NULL,
    title           VARCHAR(150) NOT NULL,
    url             VARCHAR(255) NOT NULL,
    description     TEXT,
    created_at      TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT pk_links PRIMARY KEY(id),
    CONSTRAINT fk_links_users FOREIGN KEY(user_id) REFERENCES users(id)
)ENGINE='InnoDB';