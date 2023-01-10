const path = require('path');
const PostModel = require('../models/Post');

const createPost = async (req, res, next) => {
    try {
        console.log('OTHER FIELD DATA', req.body.description);
        console.log('IMAGE DATA', req.files.file);
        let filepath = path.join(`${__dirname}/../public/${req.files.file.name}`);
        await req.files.file.mv(filepath);
        let post = await PostModel.create({imageUrl: url});
        return res
            .status(201)
            .json({post});
    } catch (error) {
        return res
            .status(400)
            .json({ message: error.message });
    }
};


module.exports = {
    createPost
};