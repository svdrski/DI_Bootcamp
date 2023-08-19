
select * from film


1
select rating, count(*)  from film
group by rating 

2
select *  from film
where rating in ('PG-13', 'G') 
and length < 120 and rental_rate < 3
order by title

3

select * from customer where first_name = 'Hleb'

UPDATE customer
set first_name = 'Hleb',
last_name = 'Svidzerski',
email = 'tralala@maf.com',
activebool = false
where first_name = 'Jared' and last_name = 'Ely'

select * from customer


4
select customer.address_id, customer.first_name, customer.last_name, address.address
from customer
inner join address
on customer.address_id = address.address_id
where customer.first_name = 'Hleb'

update address
set address = 'alenby'
where address_id = '530'
