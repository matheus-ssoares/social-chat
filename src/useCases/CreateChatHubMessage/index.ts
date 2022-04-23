import { PrismaChatHubRepository } from '../../repositories/implementations/PrismaChatHubRepository';
import { CreateChatHubController } from './CreateChatHubMessageController';
import { CreateChatHubUseCase } from './CreateChatHubMessageUseCase';

const prismaChatHubRepository = new PrismaChatHubRepository();

const createChatHubUseCase = new CreateChatHubUseCase(prismaChatHubRepository);

const createChatHubController = new CreateChatHubController(
  createChatHubUseCase,
);

export { createChatHubUseCase, createChatHubController };
