import { ChatHub } from '../entities/ChatHub';

export interface IChatHubRepository {
  // eslint-disable-next-line no-unused-vars
  save: (chatHub: ChatHub, participants: string[]) => Promise<ChatHub>;
  getAll: () => Promise<ChatHub[]>;
}
