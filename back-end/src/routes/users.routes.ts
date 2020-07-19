import { Router } from 'express';

const usersRouter = Router();

usersRouter.get('/', (request, response) => {
  return response.json({ message: 'users' });
});

export default usersRouter;
