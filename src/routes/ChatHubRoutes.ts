import { Router } from 'express';
import { SchemaTypes, validation } from '../helpers/validation';
import { createChatHubController } from '../useCases/CreateChatHub';
import { createChatHubSchema } from '../useCases/CreateChatHub/CreateChatHubSchema';

const chatHubRoutes = Router();

chatHubRoutes.get('/', createChatHubController.handle);

chatHubRoutes.post(
  '/',
  (req, res, next) =>
    validation(
      [{ type: SchemaTypes.BODY, schema: createChatHubSchema }],
      req,
      res,
      next,
    ),
  createChatHubController.handle,
);

export { chatHubRoutes };
