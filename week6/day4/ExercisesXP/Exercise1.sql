-- EXERCISE 1
select * from items order by item_price

select * from items where item_price >= 80 order by item_price DESC

select customer_name, customer_lastname from customers order by customer_name limit 3 

select customer_lastname from customers order by customer_lastname DESC