import { PrismaClient } from '@prisma/client';
import { ChatHub } from '../../entities/ChatHub';
import { NotFoundError } from '../../helpers/NotFoundError';
import { IChatHubRepository } from '../IChatHubRepository';

export class PrismaChatHubRepository implements IChatHubRepository {
  private prismaProvider: PrismaClient;

  constructor() {
    this.prismaProvider = new PrismaClient();
  }
  async getAll(userId: string, limit: string, skip: string): Promise<ChatHub[]> {
    const findUser = await this.prismaProvider.users.findFirst({
      where: {
        external_id: userId,
      },
    });

    if (!findUser) throw new NotFoundError();

    const chatHubs = await this.prismaProvider.chat_hubs.findMany({
      include: { chat_hub_participants: true },
      where: {
        chat_hub_participants: {
          every: {
            user_id: userId,
          },
        },
      },
      skip: Number(skip),
      take: Number(limit),
    });

    return chatHubs;
  }
  async save(chatHub: ChatHub, participants: string[]): Promise<ChatHub> {
    try {
      const createdChatHub = await this.prismaProvider.chat_hubs.create({
        data: {
          name: chatHub.name,
        },
      });

      const findParticipants = await this.prismaProvider.users.findMany({
        where: {
          external_id: {
            in: participants,
          },
        },
      });

      const formattedParticipants = findParticipants.map((user) => ({
        user_id: user.id,
        chat_hub_id: createdChatHub.id,
      }));

      await this.prismaProvider.chat_hub_participants.createMany({
        data: formattedParticipants,
      });

      const createdChatHubWithParticipants =
        await this.prismaProvider.chat_hubs.findFirst({
          where: {
            id: createdChatHub.id,
          },
          include: {
            chat_hub_participants: true,
          },
        });
      return createdChatHubWithParticipants!;
    } catch (error) {
      throw new Error('Failed on create');
    }
  }
}
