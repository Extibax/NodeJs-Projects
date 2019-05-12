import express from 'express';
import graphql_http from 'express-graphql';

const server = express();

/* Routes */
server.get('/', (req, res) => {
    res.json('Hello World');
});

const schema = {}

/* Middlewares */
server.use('/graphql', graphql_http({
    graphiql: true,
    schema: schema
}));

/* Starting Server */
server.listen(3000, () => {
    console.log('Server Port:', 3000);
});