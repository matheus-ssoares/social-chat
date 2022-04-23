import { PrismaUserRepository } from '../../repositories/implementations/PrismaUserRepository';
import { UpdateUserController } from './UpdateUserController';
import { UpdateUserUseCase } from './UpdateUserUseCase';

const prismaUserRepository = new PrismaUserRepository();

const updateUserUseCase = new UpdateUserUseCase(prismaUserRepository);

const updateUserController = new UpdateUserController(updateUserUseCase);

export { updateUserUseCase, updateUserController };
