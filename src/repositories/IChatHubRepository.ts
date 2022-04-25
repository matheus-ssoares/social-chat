import { ChatHub } from '../entities/ChatHub';

export interface IChatHubRepository {
  // eslint-disable-next-line no-unused-vars
  save: (chatHub: ChatHub, participants: string[]) => Promise<ChatHub>;
  // eslint-disable-next-line no-unused-vars
  getAll: (userId: string, limit: string, skip: string) => Promise<ChatHub[]>;
}
