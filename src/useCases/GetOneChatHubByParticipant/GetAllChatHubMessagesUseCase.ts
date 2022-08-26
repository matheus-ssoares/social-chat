/* eslint-disable no-empty-function */

import { IChatHubMessagesRepository } from '../../repositories/IChatHubMessageRepository';
import { IGetAllChatHubMessagesRequestDto } from './GetAllChatHubMessagesDto';

export class GetAllChatHubMessagesUseCase {
  // eslint-disable-next-line no-unused-vars
  constructor(private chatHubMessagesRepository: IChatHubMessagesRepository) {}
  async execute(data: IGetAllChatHubMessagesRequestDto) {
    const { id, skip, limit } = data;
    return this.chatHubMessagesRepository.getAll(id, skip, limit);
  }
}
