const express = require('express');
const path = require('path');

const port = '8000';
const app = express();

const POSTS = [{}];


app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname+'/index.html'));
})

app.use('/', express.Router());
app.listen(port, () => {
    console.log(`Listen on the port ${port}...`);
})