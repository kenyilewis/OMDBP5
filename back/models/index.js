const db = require('./database')
const FavouriteMovies = require ('./favouritesMovies');
const User = require ('./user');

FavouriteMovies.belongsTo(User);

module.exports = db;

