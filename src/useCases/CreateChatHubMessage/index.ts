import { PrismaChatHubMessagesRepository } from '../../repositories/implementations/PrismaChatHubMessagesRepository';
import { CreateChatHubMessagesUseCase } from './CreateChatHubMessageUseCase';

const prismaChatHubMessagesRepository = new PrismaChatHubMessagesRepository();

const createChatHubMessagesUseCase = new CreateChatHubMessagesUseCase(
  prismaChatHubMessagesRepository,
);

export { createChatHubMessagesUseCase };
