import { PrismaClient } from '@prisma/client';
import { ChatHubMessages } from '../../entities/ChatHubMessage';
import { InternalServerError } from '../../helpers/InternalServerError';
import { NotFoundError } from '../../helpers/NotFoundError';
import { IChatHubMessagesRepository } from '../IChatHubMessageRepository';

export class PrismaChatHubMessagesRepository implements IChatHubMessagesRepository {
  private prismaProvider: PrismaClient;

  constructor() {
    this.prismaProvider = new PrismaClient();
  }

  async save(
    chatHuMessage: ChatHubMessages,
    chat_hub_id: string,
    user_id: string,
  ): Promise<ChatHubMessages> {
    try {
      const userExists = await this.prismaProvider.users.findFirst({
        where: { external_id: user_id },
      });

      if (!userExists) throw new NotFoundError();

      const chatHubExists = await this.prismaProvider.users.findFirst({
        where: { id: chat_hub_id },
      });

      if (!chatHubExists) throw new NotFoundError();

      const createdChatHubMessage =
        await this.prismaProvider.chat_hub_messages.create({
          data: {
            message: chatHuMessage.message,
            user_id: userExists.id,
            chat_hub_id: chatHubExists.id,
          },
          include: {
            chat_hub: true,
            user: true,
          },
        });

      return createdChatHubMessage;
    } catch (error) {
      throw new InternalServerError();
    }
  }
}
