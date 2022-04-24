import { PrismaChatHubMessagesRepository } from '../../repositories/implementations/PrismaChatHubMessagesRepository';
import { GetAllChatHubMessagesController } from './GetAllChatHubMessagesController';
import { GetAllChatHubMessagesUseCase } from './GetAllChatHubMessagesUseCase';

const prismaChatHubMessagesRepository = new PrismaChatHubMessagesRepository();

const getAllChatHuMessagesUseCase = new GetAllChatHubMessagesUseCase(
  prismaChatHubMessagesRepository,
);

const getAllChatHubMessagesController = new GetAllChatHubMessagesController(
  getAllChatHuMessagesUseCase,
);

export { getAllChatHuMessagesUseCase, getAllChatHubMessagesController };
