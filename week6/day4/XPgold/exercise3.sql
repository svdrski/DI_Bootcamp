create table purchases (
	id serial,
	customer_id INTEGER,
	item_id INTEGER,
	quantity_purchased INTEGER,
	primary key (id),
	FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
	FOREIGN KEY (item_id) REFERENCES items(item_id)
)

select * from customers
select * from items
select * from purchases

insert into purchases (customer_id, item_id, quantity_purchased)
values (1,1,2)

-1.1
select * from purchases
-1.2
select * from purchases
inner join customers
on purchases.customer_id = customers.customer_id
-1.3
select * from purchases
inner join customers
on purchases.customer_id = customers.customer_id
where customers.customer_id = 5
-1.4
select * from purchases
inner join customers
on purchases.customer_id = customers.customer_id
inner join items
on purchases.item_id = items.item_id
where items.item_name = 'Large desk' or items.item_name =  'Small Desk'


2.1
select customer_name, customer_lastname, item_name from customers
right outer join purchases
on purchases.customer_id = customers.customer_id
right outer join items
on purchases.item_id = items.item_id

3
insert into purchases (customer_id, quantity_purchased)
values (1,2)

-- works nut empty field become null