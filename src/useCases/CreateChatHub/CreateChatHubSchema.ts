import { ValidatedRequestSchema, ContainerTypes } from 'express-joi-validation';
import Joi from 'joi';

export interface CreateChatHubRequestSchema extends ValidatedRequestSchema {
  [ContainerTypes.Body]: {
    name: string;
    participants: string[];
  };
}

export const createChatHubSchema = Joi.object({
  name: Joi.string().max(30).required(),
  participants: Joi.array().items(Joi.string().uuid()),
});
