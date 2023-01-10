const path = require('path');
const PostModel = require('../models/Post');

const createPost = async (req, res, next) => {
    try {
        let filepath = path.join(`${__dirname}/../public/${req.files.file.name}`);
        await req.files.file.mv(filepath);
        let story = await PostModel.create({imageUrl: url});
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
    createPost
};