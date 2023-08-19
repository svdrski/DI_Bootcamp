---1
select COUNT(store.store_id), city.city, country.country from store
inner join address
on store.address_id = address.address_id
inner join city
on city.city_id = address.city_id
inner join country
on country.country_id = city.country_id
GROUP BY country.country, city.city
ORDER BY country.country, city.city


-----2
select sum(film.length / 60), country.country, city.city from store
inner join inventory
on inventory.store_id = store.store_id
inner join rental
on inventory.inventory_id = rental.inventory_id
inner join film
on inventory.film_id = film.film_id
inner join address
on store.address_id = address.address_id
inner join city
on city.city_id = address.city_id
inner join country
on country.country_id = city.country_id
GROUP BY country.country, city.city
ORDER BY country.country, city.city

----3

select sum(film.length / 60), country.country, city.city from store
inner join inventory
on inventory.store_id = store.store_id
inner join rental
on inventory.inventory_id = rental.inventory_id AND rental.return_date IS NOT NULL
inner join film
on inventory.film_id = film.film_id
inner join address
on store.address_id = address.address_id
inner join city
on city.city_id = address.city_id
inner join country
on country.country_id = city.country_id
GROUP BY country.country, city.city
ORDER BY country.country, city.city

------4 
select city.city, customer.first_name, customer.last_name  from customer
inner join address
on customer.address_id = address.address_id
left join store
on store.address_id = address.address_id
inner join city
on city.city_id = address.city_id
ORDER BY city.city

-----5

select country.country, customer.first_name, customer.last_name  from customer
inner join address
on customer.address_id = address.address_id
left join store
on store.address_id = address.address_id
inner join city
on city.city_id = address.city_id
inner join country
on country.country_id = city.country_id
ORDER BY country.country


----6
CREATE VIEW safe AS
select  sum (film.length) from store
inner join inventory
on inventory.store_id = store.store_id
inner join rental
on inventory.inventory_id = rental.inventory_id AND rental.return_date IS NOT NULL
inner join film
on inventory.film_id = film.film_id
inner join film_category
on film_category.film_id = film.film_id
inner join category
on category.category_id = film_category.category_id
where category.name != 'Horror'
AND NOT (film.title LIKE '%beast%'
         OR film.title LIKE '%monster%'
         OR film.title LIKE '%ghost%'
         OR film.title LIKE '%dead%'
         OR film.title LIKE '%zombie%'
         OR film.title LIKE '%undead%'
         OR film.description LIKE '%beast%'
         OR film.description LIKE '%monster%'
         OR film.description LIKE '%ghost%'
         OR film.description LIKE '%dead%'
         OR film.description LIKE '%zombie%'
         OR film.description LIKE '%undead%')

---7

select sum / 60 as hours  from safe
select sum / 1440 as days  from safe




