import { ValidatedRequestSchema, ContainerTypes } from 'express-joi-validation';
import Joi from 'joi';

export interface GetOneChatHubByParticipantRequestSchema
  extends ValidatedRequestSchema {
  [ContainerTypes.Query]: {
    participants: string;
  };
}

export const getOneChatHubByParticipantRequestSchema = Joi.object({
  participants: Joi.required().custom((value, helper) => {
    const values = value.split(',');
    if (values.length < 2) {
      return helper.error('You must specify at least two participant');
    }
    return true;
  }),
});
