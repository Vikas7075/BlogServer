// backend/controllers/postController.js

const Post = require('../models/Post');

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        res.status(200).json(posts);
    } catch (error) {
        console.error('Error getting posts:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const createPost = async (req, res) => {
    try {
        const { user, message } = req.body;
        const image = req.file ? req.file.path : null;

        const newPost = new Post({ user, message, image });
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { getPosts, createPost };
