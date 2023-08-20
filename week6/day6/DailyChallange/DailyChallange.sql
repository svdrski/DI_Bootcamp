----1
create table customer (
customer_id serial primary key,
first_name varchar(50),
last_name varchar(50) not null
)

create table customer_profile (
profile_id serial primary key,
isLoggedIn boolean default false,
customer_id integer UNIQUE,
FOREIGN KEY (customer_id) REFERENCES customer(customer_id)
)

select * from customer
select * from customer_profile
----2
insert into customer (first_name, last_name)
VALUES ('John','Doe'),
('Jerome','Lalu'),
('Lea','Rive')

---3
INSERT INTO customer_profile (isLoggedIn, customer_id)
SELECT true, customer_id
FROM Customer
WHERE first_name = 'John';

INSERT INTO customer_profile (isLoggedIn, customer_id)
SELECT false, customer_id
FROM Customer
WHERE first_name = 'Jerome';

---4
SELECT a.first_name
FROM customer a
INNER JOIN customer_profile b ON a.customer_id = b.customer_id
WHERE b.isLoggedIn = true;


SELECT a.first_name, b.isLoggedIn
FROM customer a
left JOIN customer_profile b ON a.customer_id = b.customer_id

SELECT count(*)
FROM customer a
left JOIN customer_profile b ON a.customer_id = b.customer_id
where b.isLoggedIn is null


--------- part 2

create table Book (
book_id SERIAL PRIMARY KEY,
title varchar(50) NOT NULL,
author varchar(50) NOT NULL
)


insert into Book (title, author )
values ('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee')
---3
create table Student (
student_id SERIAL PRIMARY KEY,
name varchar(50) NOT NULL UNIQUE,
age SMALLINT CHECK (age <= 15)
)
---4
select * from Student

insert into Student (name, age )
values ('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14)

---5
create table Library (
book_fk_id integer,
student_fk_id integer,
borrowed_date DATE,
FOREIGN KEY (book_fk_id) REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (student_fk_id) REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE
)

---6
INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
VALUES 
(1, 1,'2022-02-15'),
(3, 4, '2021-03-03'),
(2,2,'2021-05-23'),
(2,4,'2021-08-12')



----7
select Student.name, Book.title
from Student
inner join Library
on Student.student_id = Library.student_fk_id
inner join Book
on Library.book_fk_id = Book.book_id
-----
select avg(Student.age)
from Student
inner join Library
on Student.student_id = Library.student_fk_id
inner join Book
on Library.book_fk_id = Book.book_id
where title ='Alice In Wonderland'
-------
select * from Library
select * from Student

delete from Student
where name = 'Lera'
----- one row was deleted from Library

