SET SQL_SAFE_UPDATES = 0;

-- 1
SELECT * FROM Movies;

INSERT INTO Movies (`title`, `director`, `year`, `length_minutes`)
VALUES
    ('Monstros SA', 'Pete Docter', 2001, 92),
    ('Procurando Nemo', 'John Lasseter', 2003, 107),
    ('Os Incríveis', 'Brad Bird', 2004, 116),
    ('WALL-E', 'Pete Docter', 2008, 104);
    
-- 2
SELECT * FROM BoxOffice;

SELECT id FROM Movies
WHERE title LIKE '%nemo%';

INSERT INTO BoxOffice (`movie_id`, `rating`, `domestic_sales`, `international_sales`)
VALUES
    (9, 6.8, 450e6, 370e6);
  
-- DELETE FROM BoxOffice
-- WHERE movie_id = 9 AND domestic_sales = 450e6;

-- 3
UPDATE Movies
SET director = 'Andrew Staton'
WHERE id = 9;

-- 4
UPDATE Movies
SET title = 'Ratatouille', `year` = 2007
WHERE id = 3;

-- 5
INSERT INTO BoxOffice (`movie_id`, `rating`, `domestic_sales`, `international_sales`)
VALUES
    (8, 8.5, 300e6, 250e6),
    (10, 7.4, 460e6, 510e6),
    (11, 9.9, 290e6, 280e6);
    
-- 6
DELETE FROM BoxOffice
WHERE movie_id IN
    (SELECT id FROM Movies WHERE title LIKE '%WALL%');

DELETE FROM Movies
WHERE id = 11;

-- 7
DELETE FROM BoxOffice
WHERE movie_id IN
    (SELECT id FROM Movies WHERE director LIKE '%staton');
    
DELETE FROM Movies
WHERE director LIKE '%staton';

-- BONUS
-- 8
UPDATE BoxOffice
SET rating = 9.0
WHERE domestic_sales > 400e6;

-- 9
UPDATE BoxOffice
SET rating = 6.0
WHERE domestic_sales < 300e6 AND international_sales > 200e6;

-- 10
DELETE FROM BoxOffice
WHERE movie_id IN
    (SELECT id FROM Movies WHERE length_minutes > 100);

DELETE FROM Movies
WHERE length_minutes > 100;
