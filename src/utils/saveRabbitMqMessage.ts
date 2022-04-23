/* eslint-disable no-console */
import amqp from 'amqplib/callback_api';

import { createUserUseCase } from '../useCases/CreateUser';
import { updateUserUseCase } from '../useCases/UpdateUser';

// eslint-disable-next-line no-unused-vars
enum RabbitMqEventTypes {
  // eslint-disable-next-line no-unused-vars
  USER_CREATED = 'user_created',
  // eslint-disable-next-line no-unused-vars
  USER_UPDATED = 'user_updated',
}
type CreateUserMessagePayload = {
  eventType: RabbitMqEventTypes;
  name: string;
  image: string | null;
  externalId: string;
};
type UpdateUserMessagePayload = {
  eventType: RabbitMqEventTypes;
  name: string | null;
  image: string | null;
  externalId: string;
};
type MessagePayloads = CreateUserMessagePayload & UpdateUserMessagePayload;

interface TranslateFunctionsType {
  [RabbitMqEventTypes.USER_CREATED]: (
    // eslint-disable-next-line no-unused-vars
    message: CreateUserMessagePayload,
  ) => Promise<void>;
  [RabbitMqEventTypes.USER_UPDATED]: (
    // eslint-disable-next-line no-unused-vars
    message: UpdateUserMessagePayload,
  ) => Promise<void>;
}

const events = [
  RabbitMqEventTypes.USER_CREATED,
  RabbitMqEventTypes.USER_UPDATED,
];

async function createUserFromMessage(user: CreateUserMessagePayload) {
  const { name, image, externalId } = user;
  try {
    await createUserUseCase.execute({ name, image, external_id: externalId });
  } catch (error) {
    console.log(error);
  }
}
async function updateUserFromMessage(user: UpdateUserMessagePayload) {
  const { name, image, externalId } = user;
  try {
    await updateUserUseCase.execute({ name, image, external_id: externalId });
  } catch (error) {
    console.log(error);
  }
}

const translate: TranslateFunctionsType = {
  [RabbitMqEventTypes.USER_CREATED]: createUserFromMessage,
  [RabbitMqEventTypes.USER_UPDATED]: updateUserFromMessage,
};

export function saveRabbitMqMessage(msg: amqp.Message | null) {
  try {
    if (!msg) {
      throw new Error('message is empty');
    }
    const convertedMsg: MessagePayloads = JSON.parse(msg.content.toString());

    if (!events.find((event) => event === convertedMsg.eventType)) {
      throw new Error('received event was not found');
    }
    console.log(convertedMsg.eventType);
    translate[convertedMsg.eventType](convertedMsg);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}
