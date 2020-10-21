use stjiang7;
Create table commentTable(
id MEDIUMINT NOT NULL AUTO_INCREMENT,
commentText VARCHAR(600) NOT NULL,
PRIMARY KEY (id)
);

Insert into commentTable (id, commentText) values
(1, "I have something important to say"),
(2, "D&S is awesome"),
(3, "😁");

show tables;
select * from commentTable;
delete from commentTable where id = '';