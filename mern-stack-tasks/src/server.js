import express from 'express';
import morgan from 'morgan';
import path from 'path';

import connection from './database/connection';
import task_routes from './routes/task.routes';

const server = express();

/* Settings */
server.set('port', process.env.PORT || 3000);

/* Middlewares */
server.use(morgan('dev'));
server.use(express.json());

/* Routes */
server.use('/api/tasks' ,task_routes);

/* Static Files */
server.use(express.static(path.join(__dirname, 'public')));

/* Export Server */
export default server;