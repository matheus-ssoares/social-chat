import { PrismaChatHubRepository } from '../../repositories/implementations/PrismaChatHubRepository';
import { CreateChatHubController } from './CreateChatHubController';
import { CreateChatHubUseCase } from './CreateChatHubUseCase';

const prismaChatHubRepository = new PrismaChatHubRepository();

const createChatHubUseCase = new CreateChatHubUseCase(prismaChatHubRepository);

const createChatHubController = new CreateChatHubController(createChatHubUseCase);

export { createChatHubUseCase, createChatHubController };
