-- 1
INSERT INTO staff (first_name, last_name, address_id, email, store_id, `active`, username, `password`)
VALUES ('Tiago', 'Sathler', 4, 'sathler@gmail.com', 1, 1, '', '');

SELECT * FROM staff;

-- 2
INSERT INTO staff (first_name, last_name, address_id, email, store_id, `active`, username, `password`)
VALUES
    ('Tiago', 'Siqueira', 4, 'thssathler@hotmail.com', 1, 1, '', ''),
    ('Amelia', 'Siqueira', 5, 'amelia.tiag@gmail.com', 1, 1, '', '');

SELECT * FROM staff;

-- 3
INSERT INTO actor (first_name, last_name)
SELECT first_name, last_name FROM customer
LIMIT 5;

SELECT * FROM actor;

-- 4
INSERT INTO category (`name`)
VALUES
    ('Western'),
    ('Adult');
    
SELECT * FROM category;

-- 5
INSERT INTO store (manager_staff_id, address_id)
VALUES
    (3, 3);
    
SELECT * FROM store;

