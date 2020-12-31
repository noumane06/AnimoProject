// dependencies 

const express = require('express'); 
const router = express.Router(); 

// *******************************************

// 
const Usercontroller = require("../controllers/users_controller");
const checkAuth = require('../middlewares/check-auth');

router.post('/signup/verifMail', Usercontroller.user_verifMail);
router.post('/signup', Usercontroller.user_signup);
router.post('/signin', Usercontroller.user_signin);
router.get('/signout',checkAuth,Usercontroller.user_signout);
router.get('/:userid=:UsrId' ,checkAuth, Usercontroller.user_getbyId);
router.get('/Myprofile',checkAuth, Usercontroller.User_Myprofile);
router.get('/checkCoockie',checkAuth,Usercontroller.Checking_User);
router.get('/Notifications',checkAuth,Usercontroller.user_getNotifications);
router.delete('/:userId', Usercontroller.user_delete);
router.get('/upall',Usercontroller.postTest);
module.exports = router ;