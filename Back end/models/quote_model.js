const mongoose = require("mongoose") ; 

const quoteSchema = mongoose.Schema({
        _id : mongoose.Schema.Types.ObjectId , 
        Quote : {type : String , required : true} ,  
        publishDate : {type : Date , default : Date.now }
    }); 
    
module.exports = mongoose.model('Quote', quoteSchema);
