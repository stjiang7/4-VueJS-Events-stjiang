waitingApp = new Vue({
    el: '#commentTableBody',
    data: {
      comments: [{
        id: '',
        commentText: ''
      }],
      newComment:{
        id: '',
        commentText: ''
      }
    },
    methods: {
      fetchComment() {
        fetch('api/comments/')
        .then(response => response.json())
        .then(json =>  {
          this.comments=json;
          console.log(this.comments);
        });
      },
      createComment(){
        //this.newComment.id = (this.Comment.id+=1);
        fetch('api/comments/create.php', {
          method:'POST',
          body: JSON.stringify(this.newComment),
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          }
        })
        .then( response => response.json() )
        .then( json => {
          console.log('Returned from post:', json);
          this.comments.push(json[0]);
          this.newComment = this.newCommentData();
        });
        console.log('Creating (POSTing)...!');
        console.log(this.newComment);
      },
      newCommentData() {
        return {
          id: '',
          commentText: ''
        }
      }
    },
    created(){
      this.fetchComment();
    }
  });