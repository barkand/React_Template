CREATE TABLE user(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    create_time DATETIME COMMENT 'Create Time',
    update_time DATETIME COMMENT 'Update Time',
    username VARCHAR(255) COMMENT 'username',
    token VARCHAR(255) COMMENT 'Token',
    refresh_token VARCHAR(255) COMMENT 'Refresh Token',
) DEFAULT CHARSET UTF8 COMMENT 'user';

ALTER TABLE `user` ADD COLUMN code INT COMMENT 'Code';
ALTER TABLE `user` ADD COLUMN code_expire DATETIME COMMENT 'Code Expire';
