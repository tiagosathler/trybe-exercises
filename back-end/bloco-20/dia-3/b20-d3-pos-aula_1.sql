-- 1
SELECT * FROM Pecas
WHERE `name` LIKE 'GR%';

-- 2
SELECT * FROM Fornecimentos
WHERE peca = 2
ORDER BY Fornecedor;

-- 3
SELECT peca, Preco, Fornecedor FROM Fornecimentos
WHERE fornecedor LIKE '%n%';

-- 4
SELECT * FROM Fornecedores
WHERE `name` LIKE '%ltda' 
ORDER BY `name` DESC;

-- 5
SELECT COUNT(*) AS qtd_empresas FROM Fornecedores
WHERE code LIKE '%f%';

-- 6
SELECT * FROM Fornecimentos
WHERE Preco BETWEEN 15 AND 40
ORDER BY Preco;

-- 7
SELECT COUNT(*) FROM Vendas
WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';

