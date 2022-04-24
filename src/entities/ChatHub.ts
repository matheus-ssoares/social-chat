import { v4 as uuid_v4 } from 'uuid';
import { ChatHubParticipants } from './ChatHubParticipants';

export class ChatHub {
  public readonly id: string;
  public name: string;
  public chat_hub_participants?: ChatHubParticipants[] | null;

  constructor(props: Omit<ChatHub, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid_v4();
    }
  }
}
