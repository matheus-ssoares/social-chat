import { Router } from 'express';
import { createChatHubController } from '../useCases/CreateChatHub';

const chatHubRoutes = Router();

chatHubRoutes.get('/', (request, response) =>
  createChatHubController.handle(request, response),
);

chatHubRoutes.post('/', (request, response) =>
  createChatHubController.handle(request, response),
);

export { chatHubRoutes };
