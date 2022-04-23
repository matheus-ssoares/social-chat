/* eslint-disable no-unused-vars */
import { User } from '../entities/User';

export interface IUsersRepository {
  save: (user: User) => Promise<User>;
  update: (user: User) => Promise<User>;
  findByExternalId: (externalId: string) => Promise<User | null>;
}
