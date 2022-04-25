import { Router } from 'express';
import { SchemaTypes, validation } from '../helpers/validation';
import { getAllChatHubMessagesController } from '../useCases/GetAllChatHubMessages';
import { getAllChatHubMessagesRequestSchema } from '../useCases/GetAllChatHubMessages/CreateChatHubSchema';

const chatHubMessagesRoutes = Router();

chatHubMessagesRoutes.get(
  '/',
  (req, res, next) =>
    validation(
      [{ type: SchemaTypes.QUERY, schema: getAllChatHubMessagesRequestSchema }],
      req,
      res,
      next,
    ),
  getAllChatHubMessagesController.handle,
);

export { chatHubMessagesRoutes };
