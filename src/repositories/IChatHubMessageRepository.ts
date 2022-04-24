/* eslint-disable no-unused-vars */
import { ChatHubMessages } from '../entities/ChatHubMessage';

export interface IChatHubMessagesRepository {
  save: (
    chatHub: ChatHubMessages,
    chat_hub_id: string,
    user_id: string,
  ) => Promise<ChatHubMessages>;
}
