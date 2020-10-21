use stjiang;
Create table Comment(
id VARCHAR(64) PRIMARY KEY,
commentText VARCHAR(64)
);

Insert into Comment (id, commentText) values
[
  {
    "id": 1,
    "commentText": "I have something important to say"
  },
  {
    "id": 2,
    "commentText": "D&S is awesome"
  },
  {
    "id": 3,
    "commentText": "😁"
  }
]

show tables;
select * from Comment;
delete from Comment where commentId = 'TGregory';