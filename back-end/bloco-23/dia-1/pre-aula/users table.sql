
    DROP TABLE IF EXISTS users;
    
    CREATE TABLE IF NOT EXISTS users (
        id INT NOT NULL AUTO_INCREMENT,
        first_name VARCHAR(50) NOT NULL,
        last_name VARCHAR(50) NOT NULL,
        email VARCHAR(50) NOT NULL,
        `password` VARCHAR(10) NOT NULL,
        PRIMARY KEY(id)
    );    