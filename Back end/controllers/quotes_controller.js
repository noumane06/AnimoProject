// dependencies 

const Quote = require('../models/quote_model'); 
const mongoose = require('mongoose');

// *********************
exports.quote_post = function (req,res,next) {

  
    const quote = new Quote(
        {
            _id : new mongoose.Types.ObjectId(),
            Quote : req.body.Quote 
        });
    quote.save()
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
exports.quote_get_all = function (req, res , next) {
    
    Quote.find()
    .select("_id Quote publishDate")
    .sort({publishDate : -1})
    .exec()
    .then(docs => {
        const response = {
            count : docs.length , 
            quotes : docs 
        }; 
        res.status(200).json(response);
    });
};