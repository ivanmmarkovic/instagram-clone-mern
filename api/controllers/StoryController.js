
const StoryModel = require('../models/Story');

const createStory = async (req, res, next) => {
    try {
        let {url} = req.body;
        let story = await StoryModel.create({imageUrl: url});
        return res
            .status(201)
            .json({story});
    } catch (error) {
        return res
            .status(400)
            .json({ message: error.message });
    }
};


module.exports = {
    createStory
};