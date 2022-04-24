import { Router } from 'express';
import { getAllChatHubMessagesController } from '../useCases/GetAllChatHubMessages';

const chatHubMessagesRoutes = Router();

chatHubMessagesRoutes.get('/', (request, response) =>
  getAllChatHubMessagesController.handle(request, response),
);

export { chatHubMessagesRoutes };
