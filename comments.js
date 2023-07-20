// Create web server
// 1. create express web server
// 2. create route for GET /comments
// 3. return all comments from memory
// 4. listen on port 3000

const express = require('express');
const app = express();
const port = 3000;
const comments = require('./comments');

app.get('/comments', (req, res) => {
    res.send(comments);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
