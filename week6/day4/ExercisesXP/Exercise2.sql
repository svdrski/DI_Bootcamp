1
select * from customer
2
select first_name || ' ' || last_name as full_name from customer
3
select distinct(create_date) from customer
4
select * from customer order by first_name DESC
5
select film_id, title, description, release_year, rental_rate from film order by rental_rate
6
select address, phone from address where district = 'Texas'
7
select * from film where film_id = 15 or film_id = 150
8
select film_id, title, description, length, rental_rate from film where title = 'Racer Egg'
9
select film_id, title, description, length, rental_rate from film where title like 'Ra%%'
10
select * from film order by rental_rate limit 10
11
select * from film order by rental_rate offset 10 FETCH FIRST 10 ROWS ONLY

12
select customer.customer_id, customer.first_name, customer.last_name, payment.amount, payment.payment_date
from customer 
inner join payment on customer.customer_id = payment.customer_id
order by customer.customer_id

13
select * from film
left join inventory
on film.film_id = inventory.film_id
where inventory.film_id is null

14
select country.country, city.city
from country
inner join city
on country.country_id = city.country_id
where city = 'Vilnius'

15
select staff.staff_id, customer.customer_id, customer.first_name || ' ' || customer.last_name as customer_full_name, payment.amount, payment.payment_date
from customer
inner join payment on customer.customer_id =  payment.customer_id
inner join staff on payment.staff_id = staff.staff_id
order by staff_id
