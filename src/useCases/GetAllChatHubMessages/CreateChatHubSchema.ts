import { ValidatedRequestSchema, ContainerTypes } from 'express-joi-validation';
import Joi from 'joi';

export interface GetAllChatHubMessagesRequestSchema extends ValidatedRequestSchema {
  [ContainerTypes.Query]: {
    id: string;
    skip: string;
    limit: string;
  };
}

export const getAllChatHubMessagesRequestSchema = Joi.object({
  id: Joi.string().uuid().required(),
  skip: Joi.string().required(),
  limit: Joi.string().required(),
});
