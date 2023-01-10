
const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type:String,
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel"
    }
    /*
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "CommentModel"
    }],
    likes: {
        type:Array,
        default: []
    },
    comments: {
        type:Array,
        default: []
    },
    */

});

const PostModel = mongoose.model('PostModel', PostSchema);

module.exports = PostModel;

