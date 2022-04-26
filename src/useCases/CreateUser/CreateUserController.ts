/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  // eslint-disable-next-line no-unused-vars

  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { external_id, image, name } = request.body;
    try {
      const user = await this.createUserUseCase.execute({
        name,
        image,
        external_id,
      });
      return response.status(201).json(user);
    } catch (error) {
      response.status(400).json({ message: 'Unexpected error' });
    }
    return response.status(201);
  }
}
