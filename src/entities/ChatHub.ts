import { v4 as uuid_v4 } from 'uuid';

export class ChatHub {
  public readonly id: string;
  public name: string;

  constructor(props: Omit<ChatHub, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid_v4();
    }
  }
}
