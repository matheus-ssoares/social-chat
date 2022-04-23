/* eslint-disable no-empty-function */

import { IChatHubRepository } from '../../repositories/IChatHubRepository';

export class GetAllChatHubsUseCase {
  // eslint-disable-next-line no-unused-vars
  constructor(private chatHubRepository: IChatHubRepository) {}
  async execute() {
    return this.chatHubRepository.getAll();
  }
}
