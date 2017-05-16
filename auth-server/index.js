const mongoose = require('mongoose');

const User = require('./user');
const Post = require('./post');

mongoose.connect('mongodb://pete:kissmyass2006@ds133311.mlab.com:33311/newlion', (err) => {
  const post = new Post ({
    date: Date.now(),
    title: 'My Epic Post',
    content: 'This is just too epic!!',
    author: {
      name: 'random guy',
      email: 'rguy@rguy.com',
    }
  });

  post.save((err) => {
    if (err) {throw err;}

    console.log(post);
    process.exit();
  });

  Post.find((err, posts) => {
    if (err){
      throw err;
    }

    console.log(posts);
    process.exit();
  })

  });
    //below is the js for users
  // Create a new document using our model
  // const me = new User({
  // firstName: 'john',
  // lastName: 'smith',
  // userName: 'pveg',
  // email: 'johns@gmail.com',
  // password: 'password'
  // });
  //
  // me.save((err) => {
  //   if (err) {
  //     throw err;
  //   }
  // const query = {
  //   email: /pvegliante@fvi-edu/
  // };
  //
  // User.findByEmail('pvegliante@fvi.edu', (err, user) => {
  //   if (err) {
  //     throw err;
  //   }
  //
  //   if(user) {
  //     console.log('user exists');
  //     process.exit();
  //   }
  // });
  //
  // User.find({'email': 'pvegliante@fvi.edu'}, (err, user) => {
  //   if (err) {
  //     throw err;
  //   }
  //
  //   console.log(user);
  //   process.exit();
  // })
  //
  //
  //   User.findById( "59138baed89f7b19a87030a8", (err, user) => {
  //     if (err) {
  //       throw err;
  //     }
  //
  //     console.log(user);
  //     process.exit();
  //   })
  // // });
