//we import passport packages required for authentication
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
//
//We will need the models folder to check passport agains
const User = require('../models/user')

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function (user, cb) {
  console.log(user, "serilizeeeeeeee")
  cb(null, user.id);
})
//
passport.deserializeUser(function (id, cb) {
  User.findByPk(id, function (err, user) {
    cb(null, user);
  });
});

/*
passport.deserializeUser(function (id, done) {
  User.findByPk(id).then((user) => {
      done(null, user)
  }).catch(done)
})
*/


passport.use("local", new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  function (email, password, done) {
    User.findOne({ where: { email: email } })
      .then(user => {

        if (!user) {
          return done(null, false, { message: "Incorrect username." });
        }
        console.log("valdiandooo")
        console.log(user.validatePassword(password))
        if (!user.validatePassword(password)) {
          return done(null, false, { message: "Incorrect password." });
        }

        return done(null, user);
      })
      .catch(done);
  }));



// passport.use("local-signin", new LocalStrategy(
//   {
//     usernameField: 'email',
//     passwordField: 'password',
//     passReqToCallback: true
//   },
//   function (req, username, done) {
//     User.findOne({ username: username }, function (err, user) {
//       if (err) { return done(err); }
//       if(user) return done(null, false, {message: "El usuario existe"})
//       if (!user) return User.create(req.body)
//             .then(newUser => res.send(newUser))
//     });
//   }
// ));

module.exports = passport;
