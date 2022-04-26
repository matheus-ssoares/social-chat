import { ValidatedRequest } from 'express-joi-validation';
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
import { Request, Response } from 'express';
import { CreateChatHubUseCase } from './CreateChatHubUseCase';
import { CreateChatHubRequestSchema } from './CreateChatHubSchema';
import { GenericError } from '../../helpers/GenericError';
import { InternalServerError } from '../../helpers/InternalServerError';
import { NotFoundError } from '../../helpers/NotFoundError';

export class CreateChatHubController {
  // eslint-disable-next-line no-unused-vars

  constructor(private chatHubUseCase: CreateChatHubUseCase) {}

  async handle(
    request: ValidatedRequest<CreateChatHubRequestSchema>,
    response: Response,
  ): Promise<Response> {
    const { name, participants } = request.body;
    try {
      const chatHub = await this.chatHubUseCase.execute({ name, participants });
      return response.status(201).json(chatHub);
    } catch (error) {
      if (
        error instanceof Error &&
        (error instanceof GenericError ||
          error instanceof NotFoundError ||
          error instanceof InternalServerError)
      ) {
        return response.status(error.statusCode).json({ message: error.message });
      }
      return response.status(500).json({ message: 'Unexpected Error' });
    }
  }
}
