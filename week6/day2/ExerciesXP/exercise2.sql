CREATE TABLE students (student_id SERIAL PRIMARY KEY, 
					   last_name VARCHAR(40) NOT NULL, 
					   first_name VARCHAR(40) NOT NULL, 
					   birth_date DATE)

SELECT * FROM students

INSERT INTO students (first_name, last_name,birth_date)
VALUES ('Marc', 'Benichou', '02/11/1998'),
('Yoan', 'Cohen', '03/12/2010'),
('Lea', 'Benichou', '27/07/1987'),
('Amelia', 'Dux', '07/04/1996'),
('David', 'Grez', '14/06/2003'),
('Omer', 'Simpson', '03/10/1980')