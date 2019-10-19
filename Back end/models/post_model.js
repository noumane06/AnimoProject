const mongoose = require("mongoose") ; 

const postSchema = mongoose.Schema({
        _id : mongoose.Schema.Types.ObjectId , 
        PostType : {type : String , required : true} , 
        categorie : {type : String , required : true}  ,
        animalCat : {type : String , required : true},
        race : {type : String , required : true} , 
        city : {type : String , required : true} , 
        announceTitle : {type : String , required : true} , 
        announceDescription : {type : String , required : true} , 
        publishDate : {type : Date , default : Date.now }
    }); 

module.exports = mongoose.model('Post', postSchema);
