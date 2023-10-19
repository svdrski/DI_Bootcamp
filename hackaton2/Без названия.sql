select * from users
select * from rooms
select * from photos
select * from profile_img


create table users (id varchar(250)  not null,
				   first_name varchar(250) not null,
				   last_name varchar(250) not null,
				   email varchar(250) PRIMARY KEY not null,
				   password varchar(250) not null,
				   profile_img_url text not null,
				   created timestamp default now())

create table photos (id text references rooms(id),
					 url text not null,
					created timestamp default now())
					 
create table profile_img (id text references rooms(id),
					 url text not null,
				      created timestamp default now())


create table rooms (id varchar(250) PRIMARY KEY not null,
				   email varchar(250) references users(email),
				   city varchar(250) not null,
				   longitude varchar(250) not null,
				   attitude varchar(250) not null,
				   age varchar(250),
				   availability varchar(250),
				   title varchar(250) not null,
				   description varchar(250) not null,
				   comforts text,
				   cleanliness varchar(250),
				   getup varchar(250),
				   gotobed varchar(250),
				   maxage varchar(250),
				   maxpeople varchar(250),
				   name varchar(250),
				   people_in_household varchar(250),
				   pets varchar(250),
				   petspref varchar(250),
				   rate varchar(250),
				   schedule varchar(250),
				   smokepref varchar(250),
				   smoker varchar(250),
				   type varchar(250),
				   created timestamp default now()
				   )
				   
				   
				   
				   select * from photos where id = '6b61d367-dd29-48fe-b846-56b4b1891ff2'
				   
				   SELECT * FROM rooms
LEFT JOIN photos ON rooms.id = photos.id
LEFT JOIN profile_img ON rooms.id = profile_img.id
WHERE rooms.id = '98b14cde-1bac-4cb1-84a0-13f209d31fd7';
				   