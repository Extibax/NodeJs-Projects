CREATE DATABASE IF NOT EXISTS node_restapi_mysql CHARACTER SET utf8 COLLATE utf8_unicode_ci;

USE node_restapi_mysql;

CREATE TABLE IF NOT EXISTS users(
    `id`            INT(5) NOT NULL AUTO_INCREMENT,
    `firstname`     VARCHAR(100) NOT NULL,
    `username`      VARCHAR(100) NOT NULL,
    `email`         VARCHAR(100) NOT NULL,
    `password`      VARCHAR(100) NOT NULL,
    `created_at`    TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    `updated_at`    TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL,
    CONSTRAINT pk_users PRIMARY KEY(id),
    CONSTRAINT u_users UNIQUE KEY(email)
)ENGINE=InnoDB CHARACTER SET utf8 COLLATE utf8_unicode_ci;

DESC users;