
const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
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

const StoryModel = mongoose.model('StoryModel', StorySchema);

module.exports = StoryModel;

