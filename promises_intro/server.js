const { response } = require('express');
const express = require('express');
const path = require('path');

const port = '8000';
const app = express();

const POSTS = 
[
    {
        id: "1",
        title: "Olga"
    },
    {
        id: "2",
        title: "test"
    }
  ];


app.use('/', express.json());

//TBC
//check if this is needed here or can be changes in html
app.get('/index.js', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.js'));
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
})

app.get('/posts', (req, res) => {
    res.status(200).json(POSTS);
})

app.post('/posts', (req, res) => {
    const newPost = req.body;
    POSTS.push(newPost);
    res.status(201).json(newPost);
})

app.delete('/posts/:id', (req, res) => {
    const postToDeleteId = req.params.id;
    const postToDeleteIndex = POSTS.findIndex((post) => post.id === postToDeleteId);
    POSTS.splice(postToDeleteIndex,1);
    res.status(200).json(POSTS);
})

app.listen(port, () => {
    console.log(`Listen on the port ${port}...`);
}) 