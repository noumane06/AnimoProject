const mongoose = require("mongoose") ; 
const postSchema = mongoose.Schema({
        _id : mongoose.Schema.Types.ObjectId ,
        UsrId :  { type : String , required : true},
        Usrimg: { type: String, required: true },
        firstname: { type: String, required: true },
        lastname: { type: String, required: true },
        PostType : {type : String , required : true} , 
        TransactionType: { type: String, required: true },
        Race: { type: String, required: true }, 
        Price: { type: String, required: false }, 
        Duration : {type : String , required : false}  ,
        PetName : {type : String , required : false},
        Age : {type : String , required : false} , 
        Species : {type : String , required : true} , 
        MedicalHistory : {type : String , required : false} , 
        City : {type : String , required : true} , 
        Sector: { type: String, required: false },
        Title: { type: String, required: true } ,
        Describtion: { type: String, required: false },
        publishDate : {type : Date , default : Date.now },
        imageData : [String]
    }); 

module.exports = mongoose.model('Post', postSchema);
