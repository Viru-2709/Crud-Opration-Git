var express = require('express');
var router = express.Router();
const usercontroller = require('../controller/user.controller');

/* GET users listing. */
router.get('/all', usercontroller.getAllUser);

router.post('/signup', usercontroller.postSignupUser);

router.post('/login', usercontroller.postUserLogin)

router.patch('/update/:id', usercontroller.patchUpdateUser);

router.delete('/delete/:id', usercontroller.deleteUser);

module.exports = router;
