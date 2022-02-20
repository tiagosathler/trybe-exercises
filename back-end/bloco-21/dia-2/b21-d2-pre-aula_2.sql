SELECT
    CONCAT(Employee.FIRST_NAME, " ", Employee.LAST_NAME) AS "Nome da Pessoa Colaboradora",
    CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS "Nome Gerente"
FROM
    employees AS Employee
INNER JOIN
    employees AS Manager ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID;
    
-- 1
SELECT
    employee.FIRST_NAME,
    manager.FIRST_NAME
FROM
    employees AS employee
INNER JOIN
    employees AS manager
ON
    employee.MANAGER_ID = manager.EMPLOYEE_ID
    AND
    employee.DEPARTMENT_ID <> manager.DEPARTMENT_ID;

-- 2
SELECT
    CONCAT(manager.FIRST_NAME, ' ', manager.LAST_NAME) AS GERENTE,
    COUNT(*) AS QTD_PESSOAS_LIDERADAS
FROM
    employees AS employee
INNER JOIN
    employees AS manager
ON
    employee.MANAGER_ID = manager.EMPLOYEE_ID
GROUP BY
    manager.EMPLOYEE_ID
ORDER BY
    QTD_PESSOAS_LIDERADAS DESC;
