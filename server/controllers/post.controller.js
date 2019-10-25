// import model
const Post = require('../models/post.model');
const uuid = require('uuid');

// get all posts
exports.getPosts = async (req, res) => {
  try {
    res.status(200).json(await Post.find());
  } catch (err) {
    res.status(500).json(err);
  }
};

// get single post
exports.getSinglePost = async (req, res) => {
  try {
    res.status(200).json(await Post.findOne({ id: req.params.id }));
  } catch (err) {
    res.status(500).res.json(err);
  }
};

// get random post
exports.getRandomPost = async (req, res) => {
  try {
    Post.countDocuments().exec(function(err, count) {
      const random = Math.floor(Math.random() * count);
      Post.findOne()
        .skip(random)
        .exec(function(err, result) {
          res.status(200).json(result);
        });
    });
  } catch (err) {
    res.status(500).res.json(err);
  }
};

// get posts by range
exports.getPostsByRange = async function(req, res) {
  try {
    let { startAt, limit } = req.params;

    startAt = parseInt(startAt);
    limit = parseInt(limit);
    const posts = await Post.find()
      .skip(startAt)
      .limit(limit);
    // return total amount of documents in collection
    const amount = await Post.countDocuments();

    // response: posts within range and total amount of posts
    res.status(200).json({ posts, amount });
  } catch (err) {
    res.status(500).json(err);
  }
};

//add new post
exports.addPost = async (req, res) => {
  try {
    const { title, author, content } = req.body;
    let newPost = new Post();
    newPost.title = title;
    newPost.author = author;
    newPost.content = content;
    //let newPost = new Post(req.body);
    newPost.id = uuid();

    const postSaved = await newPost.save();
    res.status(200).json(postSaved);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.editPost = async (req, res) => {
  try {
    const { title, author, content } = req.body;
    const postUpdated = await Post.findOneAndUpdate(
      { id: req.params.id },
      { title: title, author: author, content: content }
    );
    res.status(200).json(postUpdated);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.deletePost = async (req, res) => {
  try {
    const postDeleted = await Post.findOneAndDelete({ id: req.params.id });
    if (postDeleted === null) {
      let err = { error: 'already deleted' };
      throw err;
    } else res.status(200).json(postDeleted);
  } catch (err) {
    res.status(500).json(err);
  }
};
