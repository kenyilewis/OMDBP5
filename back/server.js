
// === require === //
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const routes = require('./routes');
const path = require('path')
const morgan = require('morgan');
const db = require('./models/database')
const passport = require('./config/passport')
const session = require("express-session");

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'))
app.use(session({
  secret : "keyboard cat",
  resave: true,
  saveUninitialized:false
}));

app.use(express.static(path.join(__dirname, '/public')));

app.use('/', routes);

app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/public/index.html')
})

db.sync({force: false})
    .then(() => {
        app.listen(3000, () => console.log("Eureka! 3000"))
    })
    .catch(console.error)    




