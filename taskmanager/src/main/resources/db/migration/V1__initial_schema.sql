CREATE TABLE users (
                       id BIGSERIAL PRIMARY KEY,
                       full_name VARCHAR(255) NOT NULL,
                       email VARCHAR(255) UNIQUE NOT NULL,
                       password VARCHAR(255) NOT NULL,
                       role VARCHAR(50),
                       created_at TIMESTAMP
);

CREATE TABLE tasks (
                       id BIGSERIAL PRIMARY KEY,
                       title VARCHAR(255),
                       description TEXT,
                       status VARCHAR(50),
                       priority VARCHAR(50),
                       due_date DATE,
                       created_at TIMESTAMP,
                       user_id BIGINT REFERENCES users(id)
);

CREATE TABLE comments (
                          id BIGSERIAL PRIMARY KEY,
                          message TEXT,
                          created_at TIMESTAMP,
                          user_id BIGINT REFERENCES users(id),
                          task_id BIGINT REFERENCES tasks(id)
);

CREATE TABLE refresh_token (
                               id BIGSERIAL PRIMARY KEY,
                               token VARCHAR(500) UNIQUE,
                               expiry_date TIMESTAMP,
                               user_id BIGINT UNIQUE REFERENCES users(id)
);