import { Router } from 'express';

const routes = new Router();

import TasksController from './app/controllers/TaskController';

routes.get('/tasks', TasksController.index);
routes.post('/tasks', TasksController.store);

export default routes;
