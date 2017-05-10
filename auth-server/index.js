const mongoose = require('mongoose');

const User = require('./user');

mongoose.connect('mongodb://pete:kissmyass2006@ds133311.mlab.com:33311/newlion', (err) => {
  // Create a new document using our model
  const me = new User({
  firstName: 'Pete',
  lastName: 'Vegliante',
  userName: 'pveg',
  email: 'pvegliante@fvi.edu',
  password: 'password'
  });

  me.save((err) => {
    if (err) {
      throw err;
    }

    User.find((err, user) => {
      if (err) {
        throw err;
      }

      console.log(users);
      process.exit();
    })
  });
});
