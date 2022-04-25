import { ValidatedRequestSchema, ContainerTypes } from 'express-joi-validation';
import Joi from 'joi';

export interface GetAllChatHubsRequestSchema extends ValidatedRequestSchema {
  [ContainerTypes.Query]: {
    user_id: string;
    skip: string;
    limit: string;
  };
}

export const getAllChatHubsRequestSchema = Joi.object({
  user_id: Joi.string().uuid().required(),
  skip: Joi.string().required(),
  limit: Joi.string().required(),
});
