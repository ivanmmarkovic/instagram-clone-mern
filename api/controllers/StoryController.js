const path = require('path');
const StoryModel = require('../models/Story');

const createStory = async (req, res, next) => {
    try {
        console.log('IMAGE DATA', req.files.file);
        let filepath = path.join(`${__dirname}/../public/${req.files.file.name}`);
        console.log(filepath);
        await req.files.file.mv(filepath);
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