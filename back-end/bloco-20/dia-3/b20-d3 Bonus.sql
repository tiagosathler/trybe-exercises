-- 1
SELECT Piece AS peca, Price AS preco FROM Provides
WHERE Provider = 'RBT';

-- 2
SELECT * FROM Provides
ORDER BY Price DESC
LIMIT 5;

-- 3
SELECT Provider FROM Provides
ORDER BY Price DESC
LIMIT 4 OFFSET 2;

-- 4
SELECT * FROM Provides
WHERE Provider = 'HAL'
ORDER BY Price DESC;

-- 5
SELECT Provider FROM Provides
WHERE Piece = 1;
