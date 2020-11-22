// dependecies //

const express = require('express'); 
const router = express.Router(); 

// Import from other directories 

const checkAuth = require('../middlewares/check-auth');
const PostController = require("../controllers/posts_controller");

// ***************************************************************

router.post('/', checkAuth ,PostController.post_post); 
router.get('/', checkAuth ,PostController.post_get_all);
router.get('/productId=:productId',checkAuth ,PostController.post_get_byId);
router.get('/usrid=:UsrId',checkAuth,PostController.post_getBy_Usrid);
router.delete('/:productId',checkAuth ,PostController.post_delete_byId);
router.patch('/:productId',checkAuth ,PostController.post_update_byId);


module.exports = router ; 