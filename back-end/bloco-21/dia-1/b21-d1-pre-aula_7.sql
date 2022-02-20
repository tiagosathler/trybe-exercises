-- 1
SELECT
    rating AS `classificacao`,
    AVG(length) AS `duracao_media`
FROM sakila.film
GROUP BY rating
HAVING `duracao_media` BETWEEN 115 AND 121.5;

-- 2
SELECT
    rating AS `classificacao`,
    SUM(replacement_cost) AS `total_custo_reposicao`
FROM sakila.film
GROUP by `classificacao`
HAVING `total_custo_reposicao` > 3950.0;