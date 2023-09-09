select * from film 
inner join inventory
on film.film_id = inventory.film_id
inner join rental
on inventory.inventory_id = rental.inventory_id
where rental.return_date is null
where film.rating = 'PG' OR film.rating = 'G' and rental.return_date is not null and rental.rental_date is null

select * from rental



-- 2
create table waiting (
	id serial primary key,
	child_name varchar(50) not null,
	id_film INT REFERENCES film(film_id)
)


CREATE OR REPLACE FUNCTION check_rental_return_date()
RETURNS TRIGGER AS $$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM rental
        WHERE rental.inventory_id IN (
            SELECT inventory_id
            FROM inventory
            WHERE inventory.film_id = NEW.id_film
        )
        AND rental.return_date IS NULL
    ) THEN
        RAISE EXCEPTION 'Cannot add to waiting list: rental return_date is not NULL';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;


CREATE TRIGGER check_rental_return_date_trigger
BEFORE INSERT ON waiting
FOR EACH ROW
EXECUTE FUNCTION check_rental_return_date();




insert into waiting (child_name, id_film) values ('Alex', '670')
insert into waiting (child_name, id_film) values ('John', '132')
insert into waiting (child_name, id_film) values ('rob', '39')
insert into waiting (child_name, id_film) values ('John', '1')
insert into waiting (child_name, id_film) values ('Harry', '2')


-- 3
select count (*) as waiting_number from waiting 




