--1
select name from language
--2
select film.title, film.description, language.name  as  language_name from film
inner join language
on film.language_id = language.language_id
--3
select film.title, film.description, language.name  as  language_name from film
right join language
on film.language_id = language.language_id
--4
create table new_film (film_id serial primary key, name varchar(50) )
insert into new_film (name)
values ('Film1'),
('Film2'),
('Film3'),
('Film4')
select * from new_film
--5
create table customer_review (
	review_id  SERIAL primary key not null,
	film_id integer,
	language_id integer,
	title varchar(150),
	score integer check (score >= 1 AND score <= 10),
	review_text text,
	last_update TIMESTAMP,
	FOREIGN KEY (film_id) REFERENCES new_film(film_id) ON DELETE CASCADE,
	FOREIGN KEY (language_id) REFERENCES language(language_id)
)

insert into customer_review (film_id, language_id, title, score, review_text, last_update)
values ('1', '5', 'rev tiile 1', '9', 'very good film', CURRENT_TIMESTAMP ),
values ('2', '6', 'tiile 2', '2', 'very bad film', CURRENT_TIMESTAMP )

delete from new_film
where film_id = 1

------ review was deleted with film

select * from customer_review
select * from new_film
select * from language

