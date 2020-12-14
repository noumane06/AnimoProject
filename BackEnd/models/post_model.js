const mongoose = require("mongoose") ; 
const postSchema = mongoose.Schema({
        _id : mongoose.Schema.Types.ObjectId ,
        UsrId :  { type : String , required : true},    
        PostType : {type : String , required : true} , 
        TransactionType: { type: String, required: true },
        Race: { type: String, required: false }, 
        Price: { type: String, required: false },
        Duration : {type : String , required : false}  ,
        PetName : {type : String , required : false},
        Age : {type : String , required : false} , 
        Species : {type : String , required : false} , 
        MedicalHistory : {type : String , required : false} , 
        City : {type : String , required : true} , 
        Sector: { type: String, required: false },
        Title: { type: String, required: true } ,
        Describtion: { type: String, required: false },
        publishDate : {type : Date , default : Date.now },
        likes : [String],
        imageData : [String],
        ImageName: [String]
    }); 

module.exports = mongoose.model('Post', postSchema);
