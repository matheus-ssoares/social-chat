import { Router } from 'express';
import { SchemaTypes, validation } from '../helpers/validation';
import { createChatHubController } from '../useCases/CreateChatHub';
import { createChatHubSchema } from '../useCases/CreateChatHub/CreateChatHubSchema';
import { getAllChatHubsController } from '../useCases/GetAllChatHubs';
import { getAllChatHubsRequestSchema } from '../useCases/GetAllChatHubs/CreateChatHubSchema';

const chatHubRoutes = Router();

chatHubRoutes.get(
  '/',
  (req, res, next) =>
    validation(
      [{ type: SchemaTypes.QUERY, schema: getAllChatHubsRequestSchema }],
      req,
      res,
      next,
    ),
  getAllChatHubsController.handle,
);

chatHubRoutes.post(
  '/',
  (req, res, next) =>
    validation(
      [{ type: SchemaTypes.BODY, schema: createChatHubSchema }],
      req,
      res,
      next,
    ),
  (req, res) => createChatHubController.handle(req, res),
);

export { chatHubRoutes };
