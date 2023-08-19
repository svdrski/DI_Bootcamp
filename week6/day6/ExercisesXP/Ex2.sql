select * from language
select * from film

---1
update film
set language_id = 2
where film_id = 133
---2
select * from customer
-- store_id, address_id when we insert new row into  customers we need to type id of store and id of address.
-- and after because of connection of this 3 tables,  we can check in which store customer made purchase and also check his address

--3
drop table customer_review
-- primary key of this table dont use anywhere. this table use foreign keys of other tables.
-- No action required as this table is  dependent on the film table and gets updated automatically upon changes to the film table.

--4
select count (*) from rental where return_date is null

--5
select rental.rental_id, rental.return_date, inventory.inventory_id, film.title, film.rental_rate from rental
inner join inventory
on rental.inventory_id = inventory.inventory_id
inner join film
on inventory.film_id = film.film_id
where rental.return_date is null
order by rental_rate DESC
limit 30

--6

-----1
select * from film 
inner join film_actor
on film.film_id = film_actor.film_id
inner join actor
on film_actor.actor_id = actor.actor_id
where film.description like '%Sumo Wrestler%' and actor.first_name = 'Penelope' and actor.last_name = 'Monroe'

-----2
select * from film 
where length < 60 and rating = 'R' and description like '%Documentary%'

-----3

select film.title as film_title, customer.first_name, customer.last_name, payment.amount, rental.return_date from  customer
inner join payment
on customer.customer_id = payment.customer_id
inner join rental
on customer.customer_id = rental.customer_id
inner join inventory
on rental.inventory_id = inventory.inventory_id
inner join film
on inventory.film_id = film.film_id
where payment.amount > 4 and rental.return_date > '2005-07-28' and rental.return_date < '2005-08-01'
and customer.first_name = 'Matthew' and customer.last_name = 'Mahan'

-----4
select customer.first_name, customer.last_name, film.title, film.description, film.replacement_cost
from customer
inner join rental
on customer.customer_id = rental.customer_id
inner join inventory
on rental.inventory_id = inventory.inventory_id
inner join film
on inventory.film_id = film.film_id
where film.title like 'Boat%' or  film.title like '%Boat' or film.description like '%Boat%' and customer.first_name = 'Matthew' and customer.last_name = 'Mahan'
order by replacement_cost DESC
limit 1



