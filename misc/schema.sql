DROP DATABASE IF EXISTS awesome;

CREATE DATABASE awesome;

USE awesome;

GRANT SELECT, INSERT, UPDATE, DELETE ON awesome.* TO 'www-data'@'localhost' IDENTIFIED BY 'www-data';

CREATE TABLE users (
	`id` varchar(50) NOT NULL,
	`email` varchar(50) NOT NULL,
	`passwd` varchar(50) NOT NULL,
	`admin` bool NOT NULL,
	`name` varchar(50) NOT NULL,
	`image` varchar(500) NOT NULL,
	`created_at` real NOT NULL,
	UNIQUE `idx_email` (`email`),
	KEY `idx_created_at` (`created_at`),
	PRIMARY KEY (`id`)
) ENGINE = innodb CHARSET = utf8;

CREATE TABLE blogs (
	`id` varchar(50) NOT NULL,
	`user_id` varchar(50) NOT NULL,
	`name` varchar(50) NOT NULL,
	`summary` varchar(200) NOT NULL,
	`content` mediumtext NOT NULL,
	`created_at` real NOT NULL,
	KEY `idx_created_at` (`created_at`),
	PRIMARY KEY (`id`)
) ENGINE = innodb CHARSET = utf8;

CREATE TABLE comments (
	`id` varchar(50) NOT NULL,
	`blog_id` varchar(50) NOT NULL,
	`user_id` varchar(50) NOT NULL,
	`content` mediumtext NOT NULL,
	`created_at` real NOT NULL,
	KEY `idx_created_at` (`created_at`),
	PRIMARY KEY (`id`)
) ENGINE = innodb CHARSET = utf8;
