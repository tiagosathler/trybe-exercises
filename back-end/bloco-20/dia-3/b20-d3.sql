-- 1
SELECT 'This is SQL Exercise, Practice and Solution';

-- 2
SELECT 1 AS first, 2 AS second, 3 AS third;

-- 3
SELECT 10 +15;

-- 4
SELECT cos(PI());

-- 5
SELECT * FROM Scientists;

-- 6
SELECT `name` AS 'Nome do Projeto', Hours AS 'Tempo de Trabaho' FROM Projects;

-- 7
SELECT * FROM Projects
ORDER BY name DESC;

-- 8 
SELECT Name FROM Projects
ORDER BY Name;

-- 9
SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído.') AS Resultado FROM Projects;

-- 10
SELECT Name, Hours FROM Projects
ORDER BY Hours DESC
LIMIT 3;

-- 11
SELECT DISTINCT Scientist, Project FROM AssignedTo;

-- 12
SELECT MAX(Hours) FROM Projects;

-- 13
SELECT Hours FROM Projects
ORDER BY Hours ASC
LIMIT 1 OFFSET 1;

-- 14
SELECT * FROM Projects
ORDER BY Hours ASC
LIMIT 5;

-- 15
SELECT CONCAT('Existem ', COUNT(Name), ' cientistas na tabela Scientists') FROM Scientists;

