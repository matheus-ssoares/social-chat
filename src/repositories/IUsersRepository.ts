import { User } from '../entities/User';

export interface IUsersRepository {
  // eslint-disable-next-line no-unused-vars
  save: (user: User) => Promise<User>;
}
