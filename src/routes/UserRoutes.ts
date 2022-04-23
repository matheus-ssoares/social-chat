import { Router } from 'express';
import { createUserController } from '../useCases/CreateUser';

const userRoutes = Router();

userRoutes.post('/', (request, response) =>
  createUserController.handle(request, response),
);

export { userRoutes };
