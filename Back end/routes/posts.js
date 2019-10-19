// dependecies //

const express = require('express'); 
const router = express.Router(); 
const multer = require('multer'); 

// Import from other directories 

const checkAuth = require('../middlewares/check-auth');
const PostController = require("../controllers/posts_controller");

// ***************************************************************

const storage = multer.diskStorage({
    destination : function (req,file,cb) {
        cb(null,'./uploads/');
    },
    filename : (req,file,cb)=>{
        cb(null,file.originalname);
    }
});
const upload = multer({storage : storage}); 
router.post('/', checkAuth , upload.single('productImage') , PostController.post_post); 
router.get('/', checkAuth ,PostController.post_get_all);
router.get('/:productId', checkAuth , PostController.post_get_byId);
router.delete('/:productId',checkAuth ,PostController.post_delete_byId);
router.patch('/:productId',checkAuth ,PostController.post_update_byId);


module.exports = router ; 
