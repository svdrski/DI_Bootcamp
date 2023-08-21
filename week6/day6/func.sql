create [or replace] function function_name (parametr)
   RETURNS return_type
   LANGUAGE plpgsql
AS
$$
DECLARE
    --- variable decleration 
BEGIN
--- LOGIC 

END;
$$



select get_film_count(
len_from := 40,
let_to := 90
);

select get_film_count(40,90);


select * from film 

create function  get_film_count (len_from int, len_to int)
 returns int
 language plpgsql
as 
$$
declare
film_count integer;
begin
  select count(1)
  into film_count
  from film
  where length between len_from and len_to;
  return film_count;
end;
$$