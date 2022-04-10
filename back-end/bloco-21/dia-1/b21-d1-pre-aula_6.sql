SELECT first_name, count(*) FROM sakila.actor
GROUP BY first_name;

-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;

-- 1
SELECT
    IF(`active` = 1, 'Ativo', 'Inativo') AS `Situação`,
    COUNT(*) AS `Contagem`
FROM customer
GROUP BY `active`;

-- 2
SELECT
    `store_id`,
    IF(`active` = 1, 'Ativo', 'Inativo') AS `Status`,
    COUNT(`active`) AS `Quantidade de Clientes Por Status`
FROM customer
GROUP BY `store_id`, `active`
ORDER BY `store_id`, `active`;

-- 3
SELECT
    AVG(`length`) AS `média de duração de locação`,
    `rating` AS `classificação indicativa`    
FROM film
GROUP BY rating
ORDER BY `média de duração de locação` DESC;

-- 4
SELECT
    district AS `nome do distrito`,
    COUNT(*) AS `quantidade`
FROM address
GROUP BY district
ORDER BY `quantidade` DESC;