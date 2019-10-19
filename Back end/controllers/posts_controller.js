// dependencies 

const Post = require('../models/post_model'); 
const mongoose = require('mongoose');

// *********************

exports.post_post = function (req,res,next) {
    console.log(req.file);
    const post = new Post(
        {
            _id : new mongoose.Types.ObjectId(),
            PostType : req.body.PostType , 
            categorie : req.body.categorie ,
            animalCat : req.body.animalCat,
            race : req.body.race , 
            city : req.body.city , 
            announceTitle : req.body.announceTitle , 
            announceDescription : req.body.announceDescription 
        });
    post.save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            message : " Post created succesfully"
        });
    })
    .catch(err => {
        console.log(err);
        res.status(404).json({
            error : err
        });
    }); 
   
};

exports.post_get_all = function (req, res , next) {
    
    Post.find()
    .select("announceTitle announceDescription PostType categorie animalCat publishDate")
    .exec()
    .then(docs => {
        const response = {
            count : docs.length , 
            posts : docs 
        }; 
        res.status(200).json(response);
    });
};

exports.post_get_byId = function (req , res , next) {
    const id = req.params.postId ; 
    Post.findById(id)
    .exec()
    .then(doc => 
        {  
         if (doc) {
            console.log(doc);
            res.status(200).json(doc);
            } else {
                res.status(404).json({error : "No such Id "});
         }
            
        })
    .catch(err => {
        console.log(err);
        res.status(500).json({error : "Invalid Id"});
    });
};

exports.post_delete_byId = (req ,res ,next) => 
{
    const id = req.params.postId ; 
    Post.deleteOne({_id : id})
    .exec()
    .then(res => 
        {
            res.status(200).json({
                message : "post deleted succefully"
            });
        })
    .catch(err => {
        res.status(404).json({
            error : " No such Id "
        });
        console.log(err);
    });
};

exports.post_update_byId = (req ,res ,next) => {
    const id = req.params.postId ; 
    const updateOps = {} ; 
    for(const ops of req.body)
    {
        updateOps[ops.propName] = ops.value;
    }
    Post.updateOne({_id : id },{$set : updateOps})
    .exec()
    .then(docs => 
        {   
            console.log(docs);
            res.status(200).json({
                message : "post updated succesfuly"
            });
        })
    .catch(err => {
        console.log(err);
        res.status(500).json({  
            error : err 
        });
    })
}