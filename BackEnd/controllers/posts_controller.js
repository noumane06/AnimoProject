// dependencies 

const Post = require('../models/post_model'); 
const mongoose = require('mongoose');

// *********************

exports.post_post = function (req,res) {
    const usrId = req.AuthID.userId ;
    const post = new Post();
    post._id = new mongoose.Types.ObjectId();
    post.PostType  = req.body.PostType;
    post.TransactionType = req.body.TransactionType;
    post.categorie  = req.body.categorie;
    post.Race  = req.body.Race;
    post.Price = req.body.Price;
    post.Duration = req.body.Duration;
    post.PetName = req.body.PetName;
    post.Age = req.body.Age;
    post.Species = req.body.Species;
    post.MedicalHistory = req.body.MedicalHistory;
    post.City  = req.body.City;
    post.Title  = req.body.Title;
    post.Describtion  = req.body.Describtion;
    req.body.imageData.map(image =>{
        post.imageData.push(image);
    });
    req.body.ImageName.map(image => {
        post.ImageName.push(image);
    });
    post.Sector = req.body.Sector ;
    post.UsrId = usrId ;

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

exports.post_get_all = async function (req, res ) {
    const page = req.query.page !== undefined ? req.query.page  : 1;
    const resPerPage = 5 ;
    const count = await Post.countDocuments({});
    Post.find()
    .sort({ publishDate : 'desc'})
    .skip((resPerPage * page) - resPerPage)
    .limit(resPerPage)
    .then(docs => {
        const response = {
            count : count , 
            posts : docs 
        }; 
        res.status(200).json(response);
    }).catch(err => {
        console.log(err);
        res.status(500).json({error : "no can do amigos"});
    });
};


exports.post_get_byId = function (req , res , next) {
    const id = req.params.productId ; 
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

exports.post_getBy_Usrid = (req , res ,next)=>{ 
    Post.find({ PostType: req.params.UsrId})
    .exec()
    .then(result => {
        if (result) {
            console.log(result);
            res.status(200).json({
                message: "Post Found",
                result
            });
        } else {
            res.status(404).json({ error: "The user has no posts" });
        }
    })
    .catch(err =>{
        res.status(500).json({error : err});
    })

}


exports.Post_Like  = (req ,res ) =>{
    const id = req.query.userid ; 
    Post.updateOne({_id : id},{likes : req.body.likes})
    .then(result=>{
        res.status(200).json(
            {
                message : "Updated succefully",
                data : result
            }
        )
    })
    .catch(err =>{
        console.log(err);
        res.status(404).json({
            message : "The user is not here :/ , below more infos",
            error : err
        })
    })
}

// exports.deletePost = (req,res) =>{
//     Post.deleteMany({Age : "1 month",Species:"cats"})
//     .then(res=>{res.status(200).json({
//         message : "deleted",
//         data : res
//     })})
//     .catch(err => {
//         res.status(404).json({
//             error : err
//         })
//     })
// }

// exports.ChangeAll = (req , res)=>{
//     Post.updateMany({},{likes :[""]})
//     .then(data =>{
//      res.status(200).json(
//          {
//              message : "Updated succesfully",
//              data : data
//          }
//      )
//     })
//     .catch(err =>{
//      console.log(err);
//      res.status(404).json({
//          message : "The user is not here :/ , below more infos",
//          error : err
//      })
//      })
//  }
 
