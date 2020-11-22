// dependecies 

const mongoose = require('mongoose');
const User = require('../models/user_model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// ******************************
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
                     username : req.body.username,
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
                            Usrimg: result.Usrimg,
                            firstname: result.firstname,
                            lastname: result.lastname
                        },
                        "secret",
                        {
                            expiresIn : "7d"
                        }
                    );
                    res.status(200).json({
                        message : "User created succefully",
                        token : token 
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
exports. user_signin = (req,res,next)=>{
    User.find({email : req.body.email})
    .exec()
    .then(userdata =>{
        if (userdata.length < 1 ) {
            console.log("Mail dosn't exist");
            res.status(401).json({
                message : "Auth failed "
            });
        }else
        {   
            bcrypt.compare(req.body.password , userdata[0].password , (err,result)=>{
                if (err) {
                    console.log("wrong mail or password ");
                    return res.status(401).json({
                        message : "Auth failed 1"
                    });
                }
                    if(result) {
                    console.log("we made it")
                    const token = jwt.sign(
                        {
                            userId : userdata[0]._id,
                            Usrimg: userdata[0].Usrimg , 
                            firstname : userdata[0].firstname,
                            lastname : userdata[0].lastname
                        },
                        "secret",
                        {
                            expiresIn : "7d"
                        }
                    );
                    return res.status(200).json({
                        message : "Welcome Back " + userdata[0].username,
                        token : token
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
};

exports.user_delete = (req,res,next)=>{
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
                    username : result.username ,
                    img : result.Usrimg
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