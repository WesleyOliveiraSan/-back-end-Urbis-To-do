import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({ Message: 'Ok' });
});

export default routes;
