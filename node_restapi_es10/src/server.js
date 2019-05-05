import express, { json } from 'express';

import indexRoutes from './routes/index.routes';
import tasksRoutes from "./routes/tasks.routes";

const app = express();

/* Settings */
app.set('port', process.env.PORT || 3000);

/* Middlewares */
app.use(json());

/* Routes */
app.use(indexRoutes);
app.use('/tasks', tasksRoutes);

export default app;