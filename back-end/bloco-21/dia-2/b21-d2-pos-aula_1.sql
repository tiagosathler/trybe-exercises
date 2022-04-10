-- 1
SELECT
    m.title,
    b.domestic_sales,
    b.international_sales
FROM BoxOffice AS b
INNER JOIN
    Movies as m
ON
    m.id = b.movie_id
ORDER BY
    m.title;
    
-- 2
SELECT
    m.title,
    (b.domestic_sales + b.international_sales) AS faturamento
FROM
    BoxOffice AS b
INNER JOIN
    Movies AS m
ON
    m.id = b.movie_id
WHERE b.international_sales > b.domestic_sales;

-- 3
SELECT
    m.title,
    b.rating
FROM
    BoxOffice AS b
INNER JOIN
    Movies AS m
ON
    m.id = b.movie_id
ORDER BY
    b.rating DESC;
    
-- 4
SELECT
    t.`name` AS theater_name,
    t.location,
    m.title,
    m.director,
    m.`year`,
    m.length_minutes
FROM
    Theater AS t
LEFT JOIN
    Movies AS m
ON
    t.id = m.theater_id
ORDER BY
    theater_name;

-- 5
SELECT
m.title,
    m.director,
    m.`year`,
    m.length_minutes,
    t.`name` AS theater_name,
    t.location    
FROM
    Theater AS t
RIGHT JOIN
    Movies AS m
ON
    t.id = m.theater_id
ORDER BY
    theater_name;
    
-- 6 Bonus
SELECT
    m.id,
    m.title,
    m.director,
    m.`year`,
    m.length_minutes,
    b.rating,
    b.domestic_sales,
    b.international_sales
FROM
    Movies AS m
INNER JOIN
    BoxOffice AS b
ON
    b.movie_id = m.id
WHERE
    b.rating > 8
    AND
    m.theater_id IS NOT NULL;