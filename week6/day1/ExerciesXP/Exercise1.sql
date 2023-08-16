CREATE TABLE items (item_id SERIAL PRIMARY KEY,
					item_name VARCHAR(40) NOT NULL,
					item_price INTEGER)
CREATE TABLE customers (customer_id SERIAL PRIMARY KEY,
					   customer_name VARCHAR(50),
					   customer_lastname VARCHAR(50))


INSERT INTO items (item_name, item_price) 
VALUES ('Small Desk', 100),
('Large desk',300),
('Fan', 80)

INSERT INTO customers (customer_name, customer_lastname)
VALUES ('Greg', 'Jones'),
('Sandra', 'Jones'),
('Scott', 'Scott'),
('Trevor', 'Green'),
('Melanie', 'Johnson')

SELECT * FROM items
SELECT * FROM items WHERE item_price > 80
SELECT * FROM items WHERE item_price < 301
SELECT * FROM customers WHERE customer_lastname = 'Smith'
SELECT * FROM customers WHERE customer_lastname = 'Jones'
SELECT * FROM customers WHERE customer_name != 'Scott'


