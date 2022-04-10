-- 1
SELECT * FROM customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

-- 2
SELECT * FROM customer
WHERE active IS FALSE AND store_id = 2 AND first_name NOT LIKE 'kenneth'
ORDER BY first_name;

-- 3
SELECT title AS título, description AS descricao, release_year AS ano_de_lancamento, replacement_cost AS custo_de_substituicao FROM film
WHERE replacement_cost >= 18 AND rating <> 'NC-17'
ORDER BY replacement_cost DESC, title
LIMIT 100;

-- 4
SELECT COUNT(*) AS active_clients FROM customer
WHERE active IS TRUE;

-- 5
SELECT * FROM customer
WHERE `active` IS FALSE AND store_id = 1;

-- 6
SELECT * FROM film
WHERE rating = 'NC-17'
ORDER BY rental_rate DESC, title
LIMIT 50;