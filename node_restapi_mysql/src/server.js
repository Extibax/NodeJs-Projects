import express, { json } from 'express';
import morgan from 'morgan';

import users_routes from './routes/user.routes.js';

const server = express();

/* Settings */
server.set('port', process.env.PORT || 3000);

/* Middlewares */
server.use(morgan('dev'));
server.use(json());

server.use('/users', users_routes);

export default server;