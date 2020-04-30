const S = require ('sequelize');
const db = require ('./database');

const FavouriteMovies = db.define('favouriteMovies', {
    title : {
        type: S.STRING        
    }
});



module.exports = FavouriteMovies;