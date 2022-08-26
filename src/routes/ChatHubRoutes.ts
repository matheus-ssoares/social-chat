import { Router } from 'express';
import { getAllChatHubsController } from '../useCases/GetAllChatHubs';
import { SchemaTypes, validation } from '../helpers/validation';
import { createChatHubController } from '../useCases/CreateChatHub';
import { createChatHubSchema } from '../useCases/CreateChatHub/CreateChatHubSchema';
import { getAllChatHubsRequestSchema } from '../useCases/GetAllChatHubs/CreateChatHubSchema';

const chatHubRoutes = Router();

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

chatHubRoutes.get(
  '/',
  (req, res, next) =>
    validation(
      [{ type: SchemaTypes.QUERY, schema: getAllChatHubsRequestSchema }],
      req,
      res,
      next,
    ),
  (req, res) => getAllChatHubsController.handle(req as any, res),
);
export { chatHubRoutes };
