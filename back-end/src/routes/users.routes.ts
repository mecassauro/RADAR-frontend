import { Router } from 'express';
import ensureAuthenticateUser from '../middleware/ensureAuthenticateUser';

const usersRouter = Router();

usersRouter.get('/', (request, response) => {
  return response.json({ message: 'users' });
});

export default usersRouter;
