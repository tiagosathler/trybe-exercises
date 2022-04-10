-- 1
SELECT actor_id FROM actor
WHERE first_name = 'KARL';

DELETE FROM film_actor
WHERE actor_id IN
    (SELECT actor_id FROM actor
    WHERE first_name = 'KARL');

DELETE FROM actor
WHERE actor_id = 12;

-- 2
SELECT actor_id FROM actor
WHERE first_name = 'MATTHEW';

DELETE FROM film_actor
WHERE actor_id IN
    (SELECT actor_id FROM actor
    WHERE first_name = 'MATTHEW');
    
DELETE FROM actor
WHERE first_name = 'MATTHEW';

-- 3
DELETE FROM film_text
WHERE `description` LIKE '%SAGA%';

-- 4
TRUNCATE film_actor;
TRUNCATE film_category;

-- 5
-- 6
