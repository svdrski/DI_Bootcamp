create table product_orders (
order_id serial primary key,
order_name varchar(50)
)

alter table product_orders
add column user_id int references users(user_id)

create table items (
item_id serial primary key,
item_name varchar(50) not null,
price INT not null,
order_id INT references product_orders(order_id)
)

create table users (
user_id serial primary key,
user_name varchar(50) not null
)

select * from product_orders
select * from items
select * from users

insert into users (user_name) values('hleb'),('Alex')


insert into product_orders (order_name, user_id) values ('order1', '1')
insert into product_orders (order_name, user_id) values ('order2', '2')

insert into items (item_name, price, order_id) values('pizza', 10, '7'),('sushi', 12, '7'), ('burger', 8, '7')
insert into items (item_name, price, order_id) values('potato', 2, '8'), ('salmon', 20, '8'), ('milk', 5, '8')

create or replace function total(order_id int)
returns DECIMAL as
$$
declare
total decimal := 0;
begin
select sum(price) into total
from items
where items.order_id = $1;
return total;
end;
$$ language plpgsql;



create or replace function usercalc(user_id int, order_id int)
returns DECIMAL as
$$
declare 
total decimal := 0;
begin
select sum(price) into total
from items
inner join product_orders
on items.order_id = product_orders.order_id
inner join users
on users.user_id = product_orders.user_id
where users.user_id = $1 and items.order_id = $2;
return total;
end;
$$ language plpgsql


select user_name, usercalc(1, 7) as total_sum from users
where user_id = '1'

select user_name, usercalc(2, 8) as total_sum from users
where user_id = '2'

select total(7) as total_sum
select total(8) as total_sum

