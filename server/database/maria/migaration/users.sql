CREATE TABLE users(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    create_time DATETIME,
    update_time DATETIME,
    username VARCHAR(255),
    token VARCHAR(255),
    refresh_token VARCHAR(255),
) DEFAULT CHARSET UTF8;

ALTER TABLE users ADD COLUMN code INT;
ALTER TABLE users ADD COLUMN code_expire DATETIME;
