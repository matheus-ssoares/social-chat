/* eslint-disable no-empty-function */

import { ChatHubMessages } from '../../entities/ChatHubMessage';
import { IChatHubMessagesRepository } from '../../repositories/IChatHubMessageRepository';
import { ICreateChatHubMessageRequestDto } from './CreateChatHubMessageDto';

export class CreateChatHubMessagesUseCase {
  // eslint-disable-next-line no-unused-vars
  constructor(private chatHubMessageRepository: IChatHubMessagesRepository) {}
  async execute(data: ICreateChatHubMessageRequestDto) {
    const { chat_hub_id, user_id } = data;
    const chatHubMessage = new ChatHubMessages({ message: data.message });

    return this.chatHubMessageRepository.save(chatHubMessage, chat_hub_id, user_id);
  }
}
