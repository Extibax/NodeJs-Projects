const express = require('express');
const jwt = require('jsonwebtoken');

const server = express();

server.get('/', (req, res) => {
    res.json({
        text: 'API Works'
    });
});

server.post('/api/login', (req, res) => {
    const user = {
        id: 3
    }
    const token = jwt.sign({user}, 'my_secret_key');
    res.json({
        token
    });
});

server.get('/api/protected', ensure_token, (req, res) => {
    jwt.verify(req.token, 'my_secret_key', (err, data) => {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                text: 'Protected',
                data: data
            });
        }
    });
});

function ensure_token(req, res, next) {
    const bearer_header = req.headers['authorization'];
    console.log(bearer_header);
    if (typeof bearer_header !== 'undefined') {
        const bearer = bearer_header.split();
        const bearer_token = bearer[1];
        req.token = bearer_token;
        next();
    } else {
        res.sendStatus(403);
    }
}

server.listen(3000, () => {
    console.log('Server Port:', 3000);
});