create table questions (id serial primary key,
					   question text not null,
					   correctAnswer integer not null)
					   
create table options (id serial primary key,
					 option text not null)
					 
create table questions_options (question_id integer references questions(id),
							   option_id integer references options(id))
							   
							   
select * from questions
select * from options
select * from questions_options

INSERT INTO questions (question, correctAnswer)
VALUES
  ('What is the capital of Australia?', 1), -- Правильный ответ - Canberra
  ('Who is known as the father of modern physics?', 2), -- Правильный ответ - Albert Einstein
  ('What is the largest planet in our solar system?', 3), -- Правильный ответ - Jupiter
  ('What is the chemical symbol for gold?', 4), -- Правильный ответ - Au (золото)
  ('In which country was the game of chess invented?', 5), -- Правильный ответ - India
  ('What is the largest desert in the world?', 6), -- Правильный ответ - Sahara
  ('What is the capital of Japan?', 7), -- Правильный ответ - Tokyo
  ('Which gas is used by plants during photosynthesis?', 8), -- Правильный ответ - Carbon Dioxide (углекислый газ)
  ('Who wrote the novel "Pride and Prejudice"?', 9), -- Правильный ответ - Jane Austen
  ('What is the chemical symbol for iron?', 10); 
  
  
INSERT INTO options (option)
VALUES
  ('Canberra'),
  ('Albert Einstein'),
  ('Jupiter'),
  ('Au'),
  ('India'),
  ('Sahara'),
  ('Tokyo'),
  ('Carbon Dioxide'),
  ('Jane Austen'),
  ('Fe');
  
  INSERT INTO questions_options (question_id, option_id)
VALUES
  (1, 3),
  (2, 2),
  (3, 4),
  (4, 1),
  (5, 3),
  (6, 1),
  (7, 4),
  (8, 7),
  (9, 5),
  (10, 2);
  
  
  
SELECT *
FROM options
WHERE id != 3
ORDER BY RANDOM()
LIMIT 2;
  