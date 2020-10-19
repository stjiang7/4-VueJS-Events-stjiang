use stjiang;
Create table Random_User(
userId VARCHAR(64) PRIMARY KEY,
firstName VARCHAR(64),
lastName VARCHAR(64)
);

Insert into Random_User (userId, firstName, lastName) values
('stjiang', 'Stella', 'Jiang');

show tables;
select * from Random_User;
delete from Random_User where userId = 'TGregory';