SELECT ROUND(AVG(replacement_cost),2) avg_cost FROM film -- выводит среднее значение

SELECT first_name || ' ' || last_name full_name from customer -- возвращает в новом виде

SELECT COUNT(*) FROM customer // подсчитывает кол-во значений

SELECT COUNT(1) num_of_cust FROM  customer // подсчитывает кол-во значений

select MAX(replacement_cost) max_cost FROM film // выводит максимальное
select MIN(replacement_cost) max_cost FROM film // выводит минимальное

select MAX(LENGTH(first_name)) FROM customer // выводит максимальное из списка длин

SELECT SUM (replacement_cost) FROM film // сумма

insert into test (name) values ('fafafa')

select * From test

CREATE TABLE test (
id serial primary key,
name varchar(255),
createdate timestamp default current_date)

select now()

LTRIM '    dan    ' удаляет пробелы слева
-'dan.  '




insert into countries(country_name)
values ('Israel'),
('France'),
('Germany')

select * from countries
select * from cities

select city_name, country_name
from countries
inner join cities
on countries.country_id=cities.country_id


select b.city_name, a.country_name
from countries a
inner join cities b
on a.country_id=b.country_id

select b.city_name, a.country_name
from countries a, cities b
where a.country_id=b.country_id


fname lname adress city country

select a.first_name, a.last_name, b.address, c.city, d.country
FROM customer a, address b, city c, country d
where a.country_id=b.country_id

SELECT customer.first_name,
       customer.last_name,
	   address.address,
	   address.district
FROM customer
inner join address 
  on customer.address_id = address.address_id
inner join city
  on address.city_id = city.city_id
inner join country
  on city.country_id = country.country_id
  
  
SELECT customer.first_name,
       customer.last_name,
	   address.address,
	   address.district,
	   city.city,
	   country.country
from customer,address,city,country
where customer.address_id = address.address_id AND
address.city_id = city.city_id AND
city.country_id = country.country_id



select * from cities

insert into cities (city_name, country_id)
values 
('New York', 4),
('Miamy', 4),
('Los Angeles', 4),
('Haifa', 1),
('Paris',2),
('Lyon',2),
('Marseille',2),
('Berlin', 3),
('Hamburg',3),
('Munich',3)


CREATE TABLE cities (
city_id serial primary key,
city_name varchar(50),
country_id integer
)

create table countries (
country_id serial primary key,
country_name  varchar(50)
)
