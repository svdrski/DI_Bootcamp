CREATE TABLE students (student_id SERIAL PRIMARY KEY, 
					   last_name VARCHAR(40) NOT NULL, 
					   first_name VARCHAR(40) NOT NULL, 
					   birth_date DATE NOT NULL)

SELECT * FROM students

INSERT INTO students (first_name, last_name, birth_date)
VALUES ('Marc','Benichou', TO_DATE ('02/11/1998', 'DD/MM/YYYY')),
('Yoan','Cohen',TO_DATE ('03/12/2010', 'DD/MM/YYYY')),
('Lea','Benichou', TO_DATE ('27/07/1987', 'DD/MM/YYYY')),
('Amelia','Dux',  TO_DATE ('07/04/1996', 'DD/MM/YYYY')),
('David','Grez',  TO_DATE ('14/06/2003', 'DD/MM/YYYY')),
('Omer','Simpson',  TO_DATE ('03/10/1980', 'DD/MM/YYYY'))


SELECT * FROM students

SELECT first_name, last_name FROM students
SELECT first_name, last_name FROM students WHERE student_id = 2
SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' AND first_name = 'Marc'
SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc'
SELECT first_name, last_name FROM students WHERE first_name LIKE '%a%'
SELECT first_name, last_name FROM students WHERE first_name LIKE 'A%'
SELECT first_name, last_name FROM students WHERE SUBSTRING (first_name, LENGTH(first_name) - 1, 1) = 'a'
SELECT first_name, last_name, student_id FROM students WHERE student_id = 1 OR student_id = 3
SELECT first_name, last_name, birth_date FROM students WHERE birth_date <= '01/01/2000'
SELECT * FROM 
TRUNCATE students