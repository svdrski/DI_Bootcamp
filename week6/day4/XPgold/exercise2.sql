select * from students
----
update students 
set birth_date = '02/11/1998'
where last_name = 'Benichou'
------
update students
set last_name = 'Guez'
where first_name = 'David'
-------
delete from students
where first_name = 'Lea' and last_name = 'Benichou'
--------
select count(*) from students
select count(*) from students where birth_date > '01/01/2000'
--------
alter table students
add column math_grade integer
---------
update students
set math_grade = 80
where student_id = 1
---------
update students
set math_grade = 90
where student_id = 2 or student_id = 4
--------
update students
set math_grade = 40
where student_id = 6
--------
select count(*) from students where math_grade > 83
-------
insert into students (last_name, first_name, birth_date, math_grade)
values ('Simpson', 'Omer', '07/04/1996', '70' )

select first_name,  count(math_grade) as total_grade  from students
GROUP BY  first_name

select sum(math_grade) from students