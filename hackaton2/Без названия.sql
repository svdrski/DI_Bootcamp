select * from users
select * from rooms


create table users (id varchar(250)  not null,
				   first_name varchar(250) not null,
				   last_name varchar(250) not null,
				   email varchar(250) PRIMARY KEY not null,
				   password varchar(250) not null,
				   profile_img_url text not null,
				   created timestamp default now())
				   
				  

create table rooms (id varchar(250) not null,
				   email varchar(250) references users(email),
				   city integer not null,
				   longitude integer not null,
				   attitude integer not null,
				   age integer,
				   availability varchar(250),
				   title varchar(250) not null,
				   description varchar(250) not null,
				   comforts text,
				   cleanliness varchar(250),
				   getup varchar(250),
				   gotobed varchar(250),
				   maxage integer,
				   maxpeople integer,
				   name varchar(250),
				   people_in_household integer,
				   pets varchar(250),
				   petspref varchar(250),
				   rate integer,
				   schedule varchar(250),
				   smokepref varchar(250),
				   smoker varchar(250),
				   type varchar(250)
				   )