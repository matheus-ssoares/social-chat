import { PrismaClient } from '@prisma/client';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

export class PrismaUserRepository implements IUsersRepository {
  private prismaProvider: PrismaClient;

  constructor() {
    this.prismaProvider = new PrismaClient();
  }

  async findByExternalId(externalId: string): Promise<User | null> {
    try {
      const createdUser = await this.prismaProvider.users.findFirst({
        where: {
          external_id: externalId,
        },
      });
      return createdUser;
    } catch (error) {
      throw new Error('Falha ao criar');
    }
  }
  async save(user: User): Promise<User> {
    try {
      const createdUser = await this.prismaProvider.users.create({
        data: {
          ...user,
          name: user.name!,
          external_id: user?.external_id,
        },
      });
      return createdUser;
    } catch (error) {
      throw new Error('Failed on create');
    }
  }
  async update(user: User): Promise<User> {
    try {
      const findUser = await this.findByExternalId(user.external_id);
      if (!findUser) {
        throw new Error('User not found');
      }
      const updateUser = await this.prismaProvider.users.update({
        data: {
          name: user.name! ?? findUser.name,
          image: user.image ?? findUser.image,
        },
        where: {
          id: findUser.id,
        },
      });
      return updateUser;
    } catch (error) {
      throw new Error('Failed on update');
    }
  }
}
