import { Router } from 'express';
import { createChatHubController } from './useCases/CreateChatHub';
import { createUserController } from './useCases/CreateUser';

const router = Router();

router.post('/users', (request, response) =>
  createUserController.handle(request, response),
);

router.post('/chat-hub', (request, response) =>
  createChatHubController.handle(request, response),
);

export { router };
