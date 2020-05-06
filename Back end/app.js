

// dependencies 

const express = require('express');
var cors = require('cors');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Routes requirement 

const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/users');
// *****************************************
/* *********** */
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended : false })) ;
app.use(bodyParser.json());

// Routes 
app.use('/posts', postRoutes);
app.use('/users',userRoutes);

// Error handling 

app.use(( req , res ,next) =>
{
    const error = new Error('Page not found');
    error.status = 404 ; 
    next(error);
});

app.use((error,req,res,next)=> 
{
    res.status(error.status || 500); 
    res.json({
        error : error
    });
});

module.exports = app ; 
