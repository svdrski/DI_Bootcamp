SELECT * FROM students ORDER BY last_name LIMIT 4

SELECT * FROM students ORDER BY birth_date DESC limit 1
SELECT *  FROM students WHERE birth_date = (SELECT MAX(birth_date) FROM students) 

SELECT * FROM students LIMIT 3 OFFSET 2

