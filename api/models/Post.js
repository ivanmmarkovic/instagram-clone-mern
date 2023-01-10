
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type:String,
        // required: true
    },
    likes: {
        type:Array,
        default: []
    },
    comments: {
        type:Array,
        default: []
    },

});

const PostModel = mongoose.model('PostModel', PostSchema);

module.exports = PostModel;

