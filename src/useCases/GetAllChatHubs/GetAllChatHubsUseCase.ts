/* eslint-disable no-empty-function */

import { IChatHubRepository } from '../../repositories/IChatHubRepository';

export class GetAllChatHubsUseCase {
  // eslint-disable-next-line no-unused-vars
  constructor(private chatHubRepository: IChatHubRepository) {}
  async execute(userId: string, limit: string, skip: string) {
    return this.chatHubRepository.getAll(userId, limit, skip);
  }
}
