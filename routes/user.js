var express = require('express');
var router = express.Router();
const usercontroller = require('../controller/user.controller');

/* GET users listing. */
router.get('/all', usercontroller.getAllUser);

router.post('/add', usercontroller.postAddUser);

router.patch('/update/:id', usercontroller.patchUpdateUser);

router.delete('/delete/:id', usercontroller.deleteUser);

module.exports = router;
