---1
select * from rental where return_date is null

select film.title as film_title from rental
inner join inventory
on rental.inventory_id = inventory.inventory_id
inner join film
on inventory.film_id = film.film_id
where rental.return_date is null


--2
select customer.first_name from rental
inner join customer
on rental.customer_id = customer.customer_id
where rental.return_date is null

--3
CREATE VIEW Joe_actions AS

SELECT category.name as category, actor.first_name, actor.last_name, film.title FROM film
inner join film_category
on film_category.film_id = film.film_id
inner join category
on category.category_id = film_category.category_id
inner join film_actor
on film_actor.film_id = film.film_id
inner join actor
on actor.actor_id = film_actor.actor_id
WHERE category.name = 'Action'  and actor.first_name = 'Joe' and actor.last_name = 'Swank'

select * from Joe_actions

