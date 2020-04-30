const { Router } = require('express')
const router = Router();
// const path = require('path')
const userController = require('./users');
router.use('/api/user', userController);


// const readFile = (file) => {
//     return new Promise( (resolve, reject) => {
//         fs.readFile(file, 'utf-8', (err, file) => {
//             if (err) reject(err)
//             resolve(file);
//         })
//     });
// }

module.exports = router;