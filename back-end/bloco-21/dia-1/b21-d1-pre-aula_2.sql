-- 1
SELECT
    film_id,
    title,
    IF (title = 'ACE GOLDFINGER', 'Já Assisti a esse filme', 'Não conheço o filme') AS `conheco o filme`
FROM film;

-- 2
SELECT
    title AS `título`,
    rating AS `classificação indicativa`,
    CASE 
        WHEN rating = 'G' THEN 'Livre para todos'
        WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
        WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
        WHEN rating = 'R' THEN 'Não recomenado para menores de 17 anos'
    ELSE 'Proibido para menores de idade'
    END AS `público alvo`
FROM film;

