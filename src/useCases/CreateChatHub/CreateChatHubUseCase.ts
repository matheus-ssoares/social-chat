/* eslint-disable no-empty-function */

import { ChatHub } from '../../entities/ChatHub';
import { IChatHubRepository } from '../../repositories/IChatHubRepository';
import { ICreateChatHubRequestDto } from './CreateChatHubDto';

export class CreateChatHubUseCase {
  // eslint-disable-next-line no-unused-vars
  constructor(private chatHubRepository: IChatHubRepository) {}
  async execute(data: ICreateChatHubRequestDto) {
    const chatHub = new ChatHub(data);
    return this.chatHubRepository.save(chatHub, data.participants);
  }
}
