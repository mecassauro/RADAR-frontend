import { Router } from 'express';
// import ensureAuthenticateUser from '../middleware/ensureAuthenticateUser';
import CreateUserService from '../services/CreateUserService'

const usersRouter = Router();

const createUserService = new CreateUserService ()

usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;

  const user = await createUserService.execute({
    name,
    email,
    password
  })

  return response.json(user);
});

export default usersRouter;
