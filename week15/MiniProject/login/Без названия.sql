create table users (
    id serial primary key,
	name varchar(250),
	email varchar(250) unique,
	joined TIMESTAMP DEFAULT now()
)

create table login (
id serial primary key,
password varchar(250),
email varchar(250) references users(email)
)

select * from users
select * from login