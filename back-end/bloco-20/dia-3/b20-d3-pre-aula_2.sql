-- 1
SELECT * FROM film
WHERE title LIKE '%ace%';

-- 2
SELECT * FROM film
WHERE description LIKE '%china';

-- 3
SELECT * FROM film
WHERE description LIKE '%girl%' AND title LIKE '%lord';

-- 4
SELECT * FROM film
WHERE title LIKE '__GON%';

-- 5
SELECT * FROM film
WHERE title LIKE '__gon%' AND description LIKE '%documentary%';

-- 6
SELECT * FROM film
WHERE title LIKE '%academy' OR title LIKE 'mosquito%';

-- 7
SELECT * FROM film
WHERE description LIKE '%monkey%' AND description LIKE '%sumo%';