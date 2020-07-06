import { Router } from 'express';

// Middlewares
import authMiddleware from './app/middlewares/authMiddleware';

// Controllers
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import TodoController from './app/controllers/TodoController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get('/todos', TodoController.index);
routes.post('/todos', TodoController.store);
routes.put('/todos/:todoId', TodoController.update);
routes.delete('/todos/:todoId', TodoController.delete);

export default routes;
