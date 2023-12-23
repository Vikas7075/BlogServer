// backend/models/Post.js

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        user: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
        image: {
            type: String,
        },
        comments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Comment',
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
