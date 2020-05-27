var express = require('express');

var app = express();

const conversations = require('./files/conversation.json')
app.get('/conversation', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(conversations)
});


const detailComment = require('./files/detail-comment.json')
app.get('/conversation/detail/108241560890445_108264224221512', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(detailComment)
});

const detailInbox1 = require('./files/detail-inbox1.json')
app.get('/conversation/detail/t_1391335917734629', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(detailInbox1)
});

const detailInbox2 = require('./files/detail-inbox2.json')
app.get('/conversation/detail/t_263190571497633', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(detailInbox2)
});

app.listen(process.env.PORT || 1111, () => {
    console.log('Application running on http://localhost:' + (process.env.PORT || 3000));
});
