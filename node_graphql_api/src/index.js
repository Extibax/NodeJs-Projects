import express from 'express';

const server = express();

/* Routes */
server.get('/', (req, res) => {
    res.json('Hello World');
});

/* Starting Server */
server.listen(3000, () => {
    console.log('Server Port:', 3000);
});