import { Router } from 'express';

const routes = new Router();

import TasksController from './app/controllers/TaskController';

routes.get('/tasks', TasksController.index);
routes.post('/tasks', TasksController.store);
routes.put('/tasks/:id', TasksController.update);

export default routes;
