create table todos (id text primary key,
				   title varchar(150) not null,
				   completed boolean not null)
				   
select * from todos

insert into todos(id, title, completed)
values(1, 'Do homework', false)