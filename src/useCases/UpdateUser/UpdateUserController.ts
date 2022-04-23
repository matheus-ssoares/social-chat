/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
import { Request, Response } from 'express';
import { UpdateUserUseCase } from './UpdateUserUseCase';

export class UpdateUserController {
  // eslint-disable-next-line no-unused-vars

  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { external_id, image, name } = request.body;
    const { id } = request.query;

    try {
      const user = await this.updateUserUseCase.execute({
        name,
        image,
        external_id,
      });
      return response.status(200).json(user);
    } catch (error) {
      response.status(400).json({ message: 'Unexpected error' });
    }
    return response.status(201);
  }
}
