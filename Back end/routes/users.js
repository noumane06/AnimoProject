// dependencies 

const express = require('express'); 
const router = express.Router(); 

// *******************************************

// 
const Usercontroller = require("../controllers/users_controller");

router.post('/signup', Usercontroller.user_signup);
router.post('/signin', Usercontroller.user_signin);
router.get('/:userid=:UsrId' , Usercontroller.user_getbyId);
router.delete('/:userId', Usercontroller.user_delete);

module.exports = router ;