// dependecies //

const express = require('express'); 
const router = express.Router(); 


const QuoteController = require("../controllers/quotes_controller");

// ********************************
router.post('/' , QuoteController.quote_post); 
router.get('/',QuoteController.quote_get_all);

module.exports = router ; 