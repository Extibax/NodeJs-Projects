const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const config = require('./config');

const server = express();

/* Settings */
server.set('port', process.env.PORT || 3000);
mongoose.connect(config.database, {
    useNewUrlParser: true
});
/* mongoose.Promise = global.Promise; */
server.set('secret_word', config.secret);

/* Middlewares */
server.use(express.json());
server.use(morgan('dev'));

/* Routes */
server.get('/', (req, res) => {
    res.json('Hello World');
});

/* Starting Server */
const port = server.get('port');

server.listen(port, () => {
    console.log('Server Port:', port);
});