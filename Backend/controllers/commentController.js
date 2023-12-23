// backend/controllers/commentController.js

const Post = require('../models/Post');
const Comment = require('../models/Comment');

const createComment = async (req, res) => {
    try {
        const { user, message } = req.body;
        const postId = req.params.postId;

        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        const newComment = new Comment({ user, message });
        await newComment.save();

        post.comments.push(newComment);
        await post.save();

        res.status(201).json(newComment);
    } catch (error) {
        console.error('Error creating comment:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { createComment };
