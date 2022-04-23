import { PrismaClient } from '@prisma/client';
import { ChatHub } from '../../entities/ChatHub';
import { IChatHubRepository } from '../IChatHubRepository';

export class PrismaChatHubRepository implements IChatHubRepository {
  private prismaProvider: PrismaClient;

  constructor() {
    this.prismaProvider = new PrismaClient();
  }
  async save(chatHub: ChatHub): Promise<ChatHub> {
    try {
      const createdChatHub = await this.prismaProvider.users.create({
        data: {
          name: chatHub.name,
        },
      });
      return createdChatHub;
    } catch (error) {
      throw new Error('Falha ao criar');
    }
  }
}
