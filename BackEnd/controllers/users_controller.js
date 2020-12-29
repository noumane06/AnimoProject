// dependecies 

const mongoose = require('mongoose');
const User = require('../models/user_model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// ******************************

// Verifying if email exist when signup -----------
exports.user_verifMail = (req, res , nxt) => {
    User.find({ email: req.body.email })
        .exec()
        .then(result => {
            if (result.length >=1) {
                res.status(409).json({
                    error: "Email already exist"
                }); 
            }else
            {
                res.status(200).json({
                    message : "Valid Email",
                }); 
            }
        })
        .catch(err =>{
            res.status(500).json(err);
        })
};

//  Signup ----------------------
exports.user_signup = (req,res,next)=>{
    User.find({email : req.body.email})
    .exec()
    .then(result => {
        if(result.length >= 1)
        {
            res.status(409).json({
                error : "Email already exist"
            });
        }else{
            bcrypt.hash(req.body.password , 10 , (err,hash)=>{
                if(err){
                 return res.status(500).json({
                     error : err 
                 });
                 
                }else{
                    var img = "" ;
                    if (req.body.Usrimg === ""  ||req.body.Usrimg === undefined) {
                        { req.body.gender === "male" ? img = "https://firebasestorage.googleapis.com/v0/b/image-upload-test-7d968.appspot.com/o/images%2FDefaults%2Fman.svg?alt=media&token=9cc204e7-e9b3-4a5d-970a-1242a04f90de"
                            : img ="https://firebasestorage.googleapis.com/v0/b/image-upload-test-7d968.appspot.com/o/images%2FDefaults%2Fwoman.svg?alt=media&token=58d24c71-6b1e-4f61-a25a-fc22d43ec1e3"}
                    } else {
                        img = req.body.Usrimg
                    }
                    console.log(img);
                    console.log(req.body.Usrimg);
                 const user = new User({
                     _id : new mongoose.Types.ObjectId(),
                     email : req.body.email , 
                     password : hash ,
                     firstname : req.body.firstname , 
                     lastname : req.body.lastname , 
                     phone : req.body.phone,
                     birthDay: "1997-06-17T00:00:00.000+00:00" ,
                     Usrimg:  img,
                     gender : req.body.gender
                    });
                 user.save()
                .then(result => {
                    console.log(result);
                    const token = jwt.sign(
                        {
                            userId: result._id,
                        },
                        process.env.COOKIES_KEY,
                        {
                            expiresIn : "7d"
                        }
                    );
                    res.cookie('auth',token,{
                        httpOnly: true ,
                        secure : process.env.COOKIES_SECURE !== 'false',
                        sameSite : 'strict',
                        maxAge : 1000*60*60*24*7 ,
                        path : '/'
                    });
                    res.status(200).json({
                        message : "User created succefully"
                    });
                })
                .catch(err => {
                    console.log(err);
                    res.status(400).json({
                        error : err
                    });
                });
              }
            });
        }
    }).catch(err =>{
        res.status(500).json(err);
    })
};

//  Sign in -------------------
exports.user_signin = (req,res)=>{
    User.find({email : req.body.email})
    .exec()
    .then(userdata =>{
        if (userdata.length < 1 ) {
            res.status(401).json({
                message : "Mail dosn't exist"
            });
        }else
        {   
            bcrypt.compare(req.body.password , userdata[0].password , (err,result)=>{
                if (err) {
                    return res.status(401).json({
                        message : "Wrong mail or password"
                    });
                }
                    if(result) {
                    const token = jwt.sign(
                        {
                            userId : userdata[0]._id
                        },
                        process.env.COOKIES_KEY,
                        {
                            expiresIn : "7d"
                        }
                    );
                    res.cookie('auth',token,{
                        httpOnly: true ,
                        secure : process.env.COOKIES_SECURE !== 'false',
                        sameSite : 'strict',
                        maxAge : 1000*60*60*24*7 ,
                        path : '/'
                    })
                    return res.status(200).json({
                        message : "Loggedin",
                        token
                    });   
                }
                else
                {
                    return res.status(401).json({
                        message: "Wrong email or password"
                    });
                }
            });
        }
    })
    .catch(err =>{
        res.status(500).json({
            message : 'internal error',
            err
        })
    })
};

exports.user_delete = (req,res)=>{
    const id = req.params.userId ; 
    User.deleteOne({_id : id})
    .exec()
    .then(result => 
        {
            res.status(200).json({
                message : "User deleted succefully",
                result : result
            });
        })
    .catch(err => {
        res.status(404).json({
            error : " No such Id "
        });
        console.log(err);
    });
};

// Search the users by id and return basic infos -----------

exports.user_getbyId = (req,res,next) => {
    const id = req.params.UsrId ;
    User.findById(id)
    .exec()
    .then(result => {
        if (result) {
            res.status(200).json({
                message: "User Found",
                result: {
                    id : result._id,
                    firstname : result.firstname , 
                    lastname : result.lastname , 
                    img : result.Usrimg,
                    phone : result.phone
                }
            });
        } else {
            res.status(404).json({
                message: "User not found"
            });
        }
    })
    .catch(err => {
        res.status(400).json(err);
    })
}

// return all notofications for the user 
exports.user_getNotifications = (req,res, next)=>{
    const id = req.AuthID.userId ;
    User.findById(id)
    .then(result => {
        if (result) {
            res.status(200).json({
                message: "User Found",
                result: {
                    id : result._id,
                    Notifications : result.Notifications,
                    NotifView : result.NotifView
                }
            });
        } else {
            res.status(404).json({
                message: "User not found"
            });
        }
    })
    .catch(err => {
        res.status(400).json(err);
    })
}
// Return the user own  profile --------------

exports.User_Myprofile = (req , res) =>{
    const id = req.AuthID.userId ;
    User.findById(id)
    .exec()
    .then(result => {
        if (result) {
            res.status(200).json({
                message: "User Found",
                result: {
                    id : result._id,
                    firstname : result.firstname , 
                    lastname : result.lastname , 
                    phone : result.phone ,
                    img : result.Usrimg ,
                    NotifView : result.NotifView
                }
            });
        } else {
            res.status(404).json({
                message: "User not found"
            });
        }
    })
    .catch(err => {
        res.status(500).json(err);
    })
}

// Logging out handler ----------------
exports.user_signout = (req,res) =>{
    const id = req.AuthID.userId ;
    User.find({_id : id})
    .then(resp =>{
        res.cookie('auth',"",{
            httpOnly: true ,
            secure : process.env.COOKIES_SECURE !== 'false',
            sameSite : 'strict',
            maxAge : 0 ,
            path : '/'
        })
        return res.status(200).json({message : "You're Logged Out"});
    })
    .catch(err =>{
        console.log(err);
        res.status(404).json({
            message : "The user is not here :/ , below more infos",
            error : err
        })
    })
}

// Checking if user is logged in -----------------------------

exports.Checking_User = (req,res,next)=>{
    res.status(200).json({
        message : "Valid cookie",
        userId : req.AuthID.userId 
    })
}

exports.postTest = (req,res)=>{
    const username = req.body.username ;
    if (username === 'noumane06') {
        res.status(200).json({
            message : 'Welcome back nariman'
        })
    } else {
        res.status(404).json({
            message : 'User not found'
        })
    }
}