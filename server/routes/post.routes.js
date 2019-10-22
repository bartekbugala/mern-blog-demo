const express = require('express');
const router = express.Router();

const PostController = require('../controllers/post.controller');

//get all posts
router.route('/posts').get(PostController.getPosts);

router.route('/posts/:id').get(PostController.getSinglePost);

router.route('/posts/:id/edit').get(PostController.getEditPost);

// find and update one post
router.route('/posts/:id/edit').post(PostController.editPost);

// add posts
router.route('/posts').post(PostController.addPost);

module.exports = router;
