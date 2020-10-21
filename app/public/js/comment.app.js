waitingApp = new Vue({
    el: '#comment',
    data: {
      comments: [{
        id: 'Stella',
        commentText: 'Jiang'
      }],
      newUser:{
        id: '',
        commentText: ''
      }
    },
    methods: {
      fetchComment() {
        fetch('api/comments/index.php')
        .then(response => response.json())
        .then(json =>  {
          this.comments=json;
          console.log(this.comments);
        });
      },
      createComment(){
        this.newComment.id = (this.newComment.firstName.substring(0,1)+this.newUser.lastName).toLowerCase();
        fetch('api/users/insertusers.php', {
          method:'POST',
          body: JSON.stringify(this.newUser),
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          }
        })
        .then( response => response.json() )
        .then( json => {
          console.log('Returned from post:', json);
          this.users.push(json[0]);
          this.newUser = this.newUserData();
        });
        console.log('Creating (POSTing)...!');
        console.log(this.newUser);
      },
      newUserData() {
        return {
          firstName: '',
          lastName: '',
          userId: ''
        }
      }
    },
    created(){
      this.fetchUser();
    }
  });