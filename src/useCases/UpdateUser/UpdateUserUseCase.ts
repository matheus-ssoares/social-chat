/* eslint-disable no-empty-function */
import { User } from '../../entities/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { IUpdateUserRequestDto } from './UpdateUserDto';

export class UpdateUserUseCase {
  // eslint-disable-next-line no-unused-vars
  constructor(private usersRepository: IUsersRepository) {}
  async execute(data: IUpdateUserRequestDto) {
    const user = new User(data);

    return this.usersRepository.update(user);
  }
}
