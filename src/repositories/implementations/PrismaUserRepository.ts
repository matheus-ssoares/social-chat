import { PrismaClient } from '@prisma/client';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

export class PrismaUserRepository implements IUsersRepository {
  private prismaProvider: PrismaClient;

  constructor() {
    this.prismaProvider = new PrismaClient();
  }
  async save(user: User): Promise<User> {
    try {
      const createdUser = await this.prismaProvider.users.create({
        data: {
          name: user.name,
          external_id: user.external_id,
        },
      });
      return createdUser;
    } catch (error) {
      throw new Error('Falha ao criar');
    }
  }
}
