const mongoose = require("mongoose") ; 

const userSchema = mongoose.Schema({
        _id : mongoose.Schema.Types.ObjectId , 
        email : {
                type : String ,
                required : true , 
                unique : true ,
                match : /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
                },
        password : {type : String , required : true} ,
        firstname: {type : String , required : true } , 
        lastname : {type : String , required : true} , 
        phone :  {
                type : String ,
                required : true 
        },
        birthDay: { type: Date, required: true } ,
        Usrimg: { type: String, required: false },
        gender : {type : String , required : true},
        Notifications : [mongoose.Schema.Types.Mixed],
        NotifView : {type : Number , default : 0}
    }); 

module.exports = mongoose.model('User', userSchema);
   