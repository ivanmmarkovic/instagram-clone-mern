
const express = require('express');
const router = express.Router();
const PostController = require('../controllers/PostController')


router
    .route('/posts')
        .post(PostController.createPost);


module.exports = router;


