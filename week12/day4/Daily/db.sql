create table users (id serial primary key,
					email varchar(100),
					username varchar(100) UNIQUE,
				    first_name varchar(100),
				    last_name varchar(100))
					
CREATE TABLE hashpwd (
  id serial PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  FOREIGN KEY (username) REFERENCES users(username)ON UPDATE CASCADE
);

					
DELETE FROM users;

select * from users
select * from hashpwd 

