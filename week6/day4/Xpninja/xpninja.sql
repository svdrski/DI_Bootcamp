---1
select * from ( select customer_name, customer_lastname from customers order by customer_name DESC LIMIT 2)AS subquery
order by customer_name;

---2
delete from purchases
where customer_id = 3

---3
select*from customers where customer_name = 'Scott'

---4
select * from purchases
right join customers
on purchases.customer_id = customers.customer_id

---5
select * from purchases
inner join customers
on purchases.customer_id = customers.customer_id
