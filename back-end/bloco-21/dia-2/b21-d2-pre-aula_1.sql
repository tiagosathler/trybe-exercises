-- 1
SELECT
    a.actor_id,
    CONCAT(a.first_name, ' ', a.last_name) AS fullname,
    f.film_id
FROM actor AS a
INNER JOIN film_actor AS f
ON f.actor_id = a.actor_id;

-- 2
SELECT
    CONCAT(first_name, ' ', last_name) AS `fullname`,
    a.address    
FROM staff AS s
INNER JOIN address AS a
ON a.address_id = s.address_id;

-- 3
SELECT
    customer_id,
    CONCAT(first_name, ' ', last_name) AS fullname,
    email,
    a.address_id,
    a.address
FROM customer AS c
INNER JOIN address AS a
ON a.address_id = c.address_id
ORDER BY fullname DESC
LIMIT 100;

-- 4
SELECT
    CONCAT(first_name, ' ', last_name) AS fullname,
    email,
    a.address_id,
    a.address,
    a.district
FROM customer AS c
INNER JOIN address AS a
ON a.address_id = c.address_id
WHERE 
    a.district LIKE 'california'
    AND
    (c.first_name LIKE '%rene%' OR c.last_name LIKE '%rene%');
    
-- 5
SELECT
    first_name,
    COUNT(a.address) AS qtd_address
FROM
    customer AS c
INNER JOIN
    address AS a
ON
    a.address_id = c.address_id
WHERE
    c.active = 1
GROUP BY
    c.customer_id
ORDER BY
    c.first_name;
    
-- 6
SELECT
    s.first_name AS nome,
    s.last_name AS sobrenome,
    AVG(p.amount) AS media_de_valor
FROM
    staff AS s
INNER JOIN
    payment AS p
ON
    p.staff_id = s.staff_id
GROUP BY
    p.staff_id;

-- 7
SELECT
    a.actor_id,
    CONCAT(a.first_name, ' ', a.last_name) AS fullname,
    f.film_id,
    f.title
FROM actor AS a
INNER JOIN
    film_actor AS fa
ON
    fa.actor_id = a.actor_id
INNER JOIN
    film AS f
ON
    f.film_id = fa.film_id;


