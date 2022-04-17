/* eslint-disable no-empty-function */
import { User } from '../../entities/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { ICreateUserRequestDto } from './CreateUserDto';

export class CreateUserUseCase {
  // eslint-disable-next-line no-unused-vars
  constructor(private usersRepository: IUsersRepository) {}
  async execute(data: ICreateUserRequestDto) {
    const user = new User(data);

    return this.usersRepository.save(user);
  }
}
