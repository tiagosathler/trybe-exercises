-- 1
SELECT COUNT(*) FROM payment
WHERE DATE(payment_date) = '2005-05-25';

-- 2
SELECT COUNT(*) FROM payment
WHERE DATE(payment_date) BETWEEN '2005/07/21' AND '2005/08/22';

-- 3
SELECT
    DATE(payment_date) AS 'data',
    YEAR('')
    