CREATE TABLE user(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    create_time DATETIME COMMENT 'Create Time',
    update_time DATETIME COMMENT 'Update Time',
    username VARCHAR(255) COMMENT 'username',
    token VARCHAR(255) COMMENT 'token',
) DEFAULT CHARSET UTF8 COMMENT 'user';