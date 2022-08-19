CREATE TABLE users (  
    id serial PRIMARY KEY,
    create_time TIMESTAMP,
    update_time TIMESTAMP,
    username VARCHAR(255),
    token VARCHAR(255),
    refresh_token VARCHAR(255)
)

ALTER TABLE users ADD COLUMN code int;
ALTER TABLE users ADD COLUMN code_expire TIMESTAMP;
