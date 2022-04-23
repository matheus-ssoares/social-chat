/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
import { Request, Response } from 'express';
import { GetAllChatHubsUseCase } from './GetAllChatHubsUseCase';

export class GetAllChatHubsController {
  // eslint-disable-next-line no-unused-vars
  constructor(private getAllChatHubsUseCase: GetAllChatHubsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    try {
      const chatHubs = await this.getAllChatHubsUseCase.execute();
      return response.status(200).json(chatHubs);
    } catch (error) {
      response.status(400).json({ message: 'Unexpected error' });
    }
    return response.status(200);
  }
}
