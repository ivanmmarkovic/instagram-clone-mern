
const express = require('express');
const router = express.Router();
const StoryController = require('../controllers/StoryController')


router
    .route('/stories')
        .post(StoryController.createStory);


module.exports = router;


