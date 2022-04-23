import { PrismaChatHubRepository } from '../../repositories/implementations/PrismaChatHubRepository';
import { GetAllChatHubsController } from './GetAllChatHubsController';
import { GetAllChatHubsUseCase } from './GetAllChatHubsUseCase';

const prismaChatHubRepository = new PrismaChatHubRepository();

const getAllChatHubsUseCase = new GetAllChatHubsUseCase(
  prismaChatHubRepository,
);

const getAllChatHubsController = new GetAllChatHubsController(
  getAllChatHubsUseCase,
);

export { getAllChatHubsUseCase, getAllChatHubsController };
