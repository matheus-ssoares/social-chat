/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
import { Request, Response } from 'express';
import { ValidatedRequest } from 'express-joi-validation';
import { GenericError } from '../../helpers/GenericError';
import { InternalServerError } from '../../helpers/InternalServerError';
import { NotFoundError } from '../../helpers/NotFoundError';
import { GetAllChatHubsRequestSchema } from './CreateChatHubSchema';
import { GetAllChatHubsUseCase } from './GetAllChatHubsUseCase';

export class GetAllChatHubsController {
  // eslint-disable-next-line no-unused-vars
  constructor(private getAllChatHubsUseCase: GetAllChatHubsUseCase) {}

  async handle(
    request: ValidatedRequest<GetAllChatHubsRequestSchema>,
    response: Response,
  ): Promise<Response> {
    const { user_id, limit, skip } = request.query;

    try {
      const chatHubs = await this.getAllChatHubsUseCase.execute(
        user_id,
        limit,
        skip,
      );
      return response.status(200).json(chatHubs);
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
