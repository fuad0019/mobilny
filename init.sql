CREATE TABLE images (
  image_id SERIAL PRIMARY KEY,
  image_path VARCHAR(50) not null
);

CREATE TABLE PHONES (
  phone_id SERIAL PRIMARY KEY,
  phone_name VARCHAR(50) not null,
  image_id integer REFERENCES images(image_id)
);

CREATE TABLE MODELS (
  model_id SERIAL PRIMARY KEY,
  model_name VARCHAR(50) not null,
  phone_id integer not null REFERENCES phones(phone_id),
  image_id integer REFERENCES images(image_id)
);

CREATE TABLE PARTS (
  part_id SERIAL PRIMARY KEY,
  part_name VARCHAR(50) not null
);

CREATE TABLE MODELS_PARTS (
  model_part_id SERIAL PRIMARY KEY,
  price integer not null,
  model_id integer not null REFERENCES models(model_id),
  part_id integer not null REFERENCES parts(part_id),
  image_id integer REFERENCES images(image_id)
);


INSERT INTO images(image_path)
values
('/images/phones/iphone12.png'),
('/images/phones/iphone12pro.png'),
('/images/phones/iphone12promax.png'),
('/images/phones/iphone12mini.png'),
('/images/phones/iphone11.png'),
('/images/phones/iphone11pro.png'),
('/images/phones/iphone11promax.png'),
('/images/phones/iphonex.png'),
('/images/phones/iphonexs.png'),
('/images/phones/iphonexsmax.png'),
('/images/phones/iphonexr.png'),
('/images/parts/backscreen.png'),
('/images/parts/frontscreen.png'),
('/images/phones/defaultphone.jpg');

INSERT INTO phones(phone_name,image_id)
values
('IPhone X', 14),
('IPhone 11', 14),
('IPhone 12', 14);


INSERT INTO models(model_name,phone_id,image_id)
values
('IPhone 12',3,1),
('IPhone 12 Pro',3,2),
('IPhone 12 Pro Max',3,3),
('IPhone 12 Pro Mini',3,4),
('IPhone 11',2,5),
('IPhone 11 Pro',2,6),
('IPhone 11 Pro Max',2,7),
('IPhone X', 1,8 ),
('IPhone XS', 1, 9),
('IPhone XS Max', 1, 10),
('IPhone XR', 1, 11);

INSERT INTO parts(part_name)
values
('bagglas'),
('frontskærm');

INSERT INTO models_parts(model_id,part_id,image_id, price)
values
(1,1,12, 200),
(1,2,13, 800),
(2,1,12, 200),  
(2,2,13, 800), 
(3,1,12, 200),  
(3,2,13, 800), 
(4,1,12, 200),  
(4,2,13, 800), 
(5,1,12, 200),  
(5,2,13, 800), 
(6,1,12, 200),  
(6,2,13, 800), 
(7,1,12, 200),  
(7,2,13, 800), 
(8,1,12, 200),  
(8,2,13, 800), 
(9,1,12, 200),  
(9,2,13, 800), 
(10,1,12, 200),  
(10,2,13, 800), 
(11,1,12, 200),  
(11,2,13, 800);

