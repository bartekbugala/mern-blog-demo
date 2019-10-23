const express = require('express');
const router = express.Router();

const PostController = require('../controllers/post.controller');

//get all posts
router.route('/posts').get(PostController.getPosts);

router.route('/posts/:id').get(PostController.getSinglePost);

<<<<<<< HEAD
// find and update one post
router.route('/posts/:id').patch(PostController.editPost);

=======
>>>>>>> 167b4eff11779e4a8e5cc5cac413adf1c951ff45
// add posts
router.route('/posts').post(PostController.addPost);

module.exports = router;
