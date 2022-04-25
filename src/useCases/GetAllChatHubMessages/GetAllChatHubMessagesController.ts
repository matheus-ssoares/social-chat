/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
import { Request, Response } from 'express';
import { ValidatedRequest } from 'express-joi-validation';
import { GenericError } from '../../helpers/GenericError';
import { InternalServerError } from '../../helpers/InternalServerError';
import { NotFoundError } from '../../helpers/NotFoundError';
import { GetAllChatHubMessagesRequestSchema } from './CreateChatHubSchema';
import { GetAllChatHubMessagesUseCase } from './GetAllChatHubMessagesUseCase';

export class GetAllChatHubMessagesController {
  // eslint-disable-next-line no-unused-vars
  constructor(private getAllChatHubMesssagesUseCase: GetAllChatHubMessagesUseCase) {}

  async handle(
    request: ValidatedRequest<GetAllChatHubMessagesRequestSchema>,
    response: Response,
  ): Promise<Response> {
    const { id, skip, limit } = request.query;

    try {
      const chatHubsMessages = await this.getAllChatHubMesssagesUseCase.execute({
        id,
        skip,
        limit,
      });
      return response.status(200).json(chatHubsMessages);
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
