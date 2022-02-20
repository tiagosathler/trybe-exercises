-- 1
SELECT
    MAX(SALARY) `MAIOR_SALARIO`
FROM employees;

-- 2
SELECT
    MAX(SALARY) - MIN(SALARY) AS `DIFERENCA`
FROM employees;

-- 3
SELECT
    JOB_ID,
    AVG(SALARY) AS `MEDIA_SALARIO`
FROM employees
GROUP BY JOB_ID
ORDER BY `MEDIA_SALARIO` DESC;

-- 4
SELECT
    SUM(SALARY) AS `VERBA`
FROM employees;

-- 5
SELECT
    MAX(SALARY) AS `MAX_SALARIO`,
    MIN(SALARY) AS `MIN_SALARIO`,
    SUM(SALARY) AS `TOTAL_SALARIOS`,
    ROUND(AVG(SALARY), 2) AS `MEDIA SALARY`
FROM employees;

-- 6
SELECT
    JOB_ID,
    COUNT(*) AS `QUANTIDADE`
FROM employees
WHERE JOB_ID = 'IT_PROG';

-- 7
SELECT
    JOB_ID AS `PROFISSAO`,
    SUM(SALARY) AS `SALARIO_POR_PROFISSAO`
FROM employees
GROUP BY JOB_ID;

-- 8
SELECT
    SUM(SALARY) AS `VERBA`
FROM employees
WHERE JOB_ID = 'IT_PROG';

-- OR
SELECT
    SUM(SALARY) AS `VERBA`
FROM employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';

-- 9
SELECT
    JOB_ID AS `PROFISSAO`,
    AVG(SALARY) AS `MEDIA_SALARIAL`
FROM employees
WHERE JOB_ID <> 'IT_PROG'
GROUP BY JOB_ID
ORDER BY `MEDIA_SALARIAL` DESC;

-- 10
SELECT
    department_id AS `DEPARTAMENTO`,
    COUNT(*) AS `QTD_FUNCIONARIOS`,
    AVG(SALARY) AS `MEDIA_SALARIAL`
FROM employees
GROUP BY department_id
HAVING `QTD_FUNCIONARIOS` > 10;

-- 11
SET SQL_SAFE_UPDATES = 0;

SELECT
    EMPLOYEE_ID
FROM
    employees
WHERE
    PHONE_NUMBER LIKE '%515%';

UPDATE employees
SET
    PHONE_NUMBER = REPLACE(PHONE_NUMBER, '515', '777')
WHERE PHONE_NUMBER LIKE '%515%';

-- 12
SELECT
    *
FROM employees
WHERE
    length(FIRST_NAME) >= 8;

-- 13
SELECT
    EMPLOYEE_ID AS `id`,
    FIRST_NAME AS `primeiro nome`,
    YEAR(HIRE_DATE) AS `ano que foi contrado`
FROM employees;

-- 14
SELECT
    EMPLOYEE_ID AS `id`,
    FIRST_NAME AS `primeiro nome`,
    DAY(HIRE_DATE) AS `dia que foi contrado`
FROM employees;

-- 15
SELECT
    EMPLOYEE_ID AS `id`,
    FIRST_NAME AS `primeiro nome`,
    MONTH(HIRE_DATE) AS `mês que foi contrado`
FROM employees;

-- 16
SELECT
    CONCAT(ucase(FIRST_NAME), ' ', ucase(LAST_NAME)) AS `NOME_COMPLETO`
FROM employees;

-- 17
SELECT
    LAST_NAME AS `SOBRENOME`,
    HIRE_DATE AS `DATA_CONTRATACAO`
FROM employees
WHERE
    MONTH(HIRE_DATE) = 7
    AND YEAR(HIRE_DATE) = 1987;
    
-- or    
SELECT LAST_NAME _NAME, HIRE_DATE
FROM hr.employees
WHERE HIRE_DATE  BETWEEN '1987-07-01'  AND '1987-07-31';
    
-- 18
SELECT
    FIRST_NAME AS `NOME`,
    LAST_NAME AS `SOBRENOME`,
    DATEDIFF(NOW(), HIRE_DATE) AS `TEMPO_DE_CASA`
FROM employees;

