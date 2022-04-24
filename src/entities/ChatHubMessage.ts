import { v4 as uuid_v4 } from 'uuid';
import { ChatHub } from './ChatHub';
import { User } from './User';

export class ChatHubMessages {
  public readonly id: string;
  public message: string;
  public chat_hub?: ChatHub | null;
  public user?: User | null;

  constructor(props: Omit<ChatHubMessages, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid_v4();
    }
  }
}
