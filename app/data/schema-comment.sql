use stjiang7;
Create table commentTable(
id VARCHAR(64) PRIMARY KEY,
commentText VARCHAR(500)
);

Insert into commentTable (id, commentText) values
(1, "I have something important to say"),
(2, "D&S is awesome"),
(3, "😁");

show tables;
select * from commentTable;
delete from commentTable where commentId = 'TGregory';