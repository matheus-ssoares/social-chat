/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
import { Request, Response } from 'express';
import { CreateChatHubUseCase } from './CreateChatHubUseCase';

export class CreateChatHubController {
  // eslint-disable-next-line no-unused-vars

  constructor(private chatHubUseCase: CreateChatHubUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    try {
      const chatHub = await this.chatHubUseCase.execute({ name });
      return response.status(201).json(chatHub);
    } catch (error) {
      response.status(400).json({ message: 'Unexpected error' });
    }
    return response.status(201);
  }
}
