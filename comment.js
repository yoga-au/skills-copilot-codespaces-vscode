// Create web server
// Create express app
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

// Create a router
const commentRouter = express.Router();

// Create a route for getting all comments
commentRouter.get('/', (req, res) => {
  res.json({ message: 'This is the comment route' });
});

// Create a route for posting a comment
commentRouter.post('/', (req, res) => {
  res.json({ message: 'This is the comment route' });
});

// Create a route for deleting a comment
commentRouter.delete('/', (req, res) => {
  res.json({ message: 'This is the comment route' });
});

// Create a route for updating a comment
commentRouter.put('/', (req, res) => {
  res.json({ message: 'This is the comment route' });
});

// Attach the router to the app
app.use('/comment', commentRouter);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});