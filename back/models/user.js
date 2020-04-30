const S = require ('sequelize');
const db = require ('./database');
const Crypto = require('crypto');


const User = db.define('user', {
    name: {
        type: S.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Please enter your name'
            }
        }
    },
    email: {
        type: S.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
            notEmpty: true,
            notNull: true,
        }
    },
    password: {
        type: S.STRING,
    },
    salt: {
      type: S.STRING
    }
},
{
    //HOOK PARA HASHEAR LA PSWD Y CREAR UN SALT ANTES DE GUARDAR EL USER 
    hooks: {
      beforeCreate: (user) => {
        user.salt = Crypto.randomBytes(20).toString('hex');
        user.password = user.hashPassword(user.password);
      },
    }
  }
);

//METODO DE INSTANCIA QUE HASHEA LO QUE SE LE PASA COMO ARGUMENTO (LE SUMA EL SALT) 
User.prototype.hashPassword = function (password) {
  return Crypto.createHmac('sha1', this.salt).update(password).digest('hex');
}
//mETODO DE INSTANCIA QUE SE PUEDE USAR PARA VALIDAR LA CONTRASEÑA PERRO!!!!!!!
User.prototype.validatePassword = function (password) {
  return this.password === this.hashPassword(password);
}


module.exports= User;