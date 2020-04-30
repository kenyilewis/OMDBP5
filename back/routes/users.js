
const express = require('express');
const Router = express.Router();
const passport = require('../config/passport');
const User = require('../models/user');

Router.post('/register', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user => {
            // console.log(error)
            if (user) return res.send("NO")
            if (!user) return User.create(req.body)
                .then(newUser => res.send(newUser))
                .catch(error => res.send(error))
        })
});

Router.post('/login', passport.authenticate('local'), function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    console.log("DALEEE!!!")
    res.send(req.user)
    //res.redirect('/movies');

});

Router.get("/isLoggedIn", function (req, res) {
    let Session = req.session.passport;
    let session = {
        id: (Session) ? Session.user.id : '',
        name: (Session) ? Session.user.name : '',
        email: (Session) ? Session.user.email : '',
    }
    Session && res.json(session)
})

Router.get("/logout", function (req, res) {
    req.session.destroy();
    console.log('deslogeado?')
    return res.redirect('/movies')
})


// Router.get('/logout', function (req, res) {
//     req.logout();
//     res.redirect(200);
// });
module.exports = Router;