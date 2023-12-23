# Blogging App Backend

This is the backend server for the Blogging App, a web application that allows users to create text posts, add comments, and search for posts and comments.

## Project Structure

- **config:** Configuration files, such as database connection settings.
- **controllers:** Controller functions for handling different aspects of the application logic.
- **middleware:** Middleware functions to process requests before reaching the routes.
- **models:** Definitions of MongoDB models for the application entities.
- **routes:** Route definitions and their connection to the corresponding controllers.
- **uploads:** Directory for storing uploaded files.
- **app.js:** Main application file setting up middleware and routes.
- **server.js:** Entry point to start the server.

## Prerequisites

- Node.js
- MongoDB

## Getting Started

1. Clone the repository:

   git clone <repository-url>
   cd backend

2. Install dependencies:

   npm install

3. Set up the environment variables:

   Create a `.env` file in the root directory and add the necessary variables.

   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/blog

   Adjust the MongoDB URI based on your MongoDB configuration.

4. Start the server:

   npm start

   The server will be running on [http://localhost:5000](http://localhost:5000).

## API Endpoints

- **POST /auth/register:** Register a new user.
- **POST /auth/login:** Log in an existing user.
- **GET /posts:** Retrieve all posts.
- **POST /posts:** Create a new post.
- **GET /posts/:postId/comments:** Retrieve comments for a specific post.
- **POST /posts/:postId/comments:** Add a new comment to a post.

## Environment Variables

- **PORT:** The port on which the server will run.
- **MONGODB_URI:** The URI for connecting to the MongoDB database.

## Authors

- [Vikas Prajapati](mailto:vks984297@gmail.com.com)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
