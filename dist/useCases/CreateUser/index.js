"use strict";
exports.__esModule = true;
exports.createUserController = exports.createUserUseCase = void 0;
var PrismaUserRepository_1 = require("../../repositories/implementations/PrismaUserRepository");
var CreateUserController_1 = require("./CreateUserController");
var CreateUserUseCase_1 = require("./CreateUserUseCase");
var prismaUserRepository = new PrismaUserRepository_1.PrismaUserRepository();
var createUserUseCase = new CreateUserUseCase_1.CreateUserUseCase(prismaUserRepository);
exports.createUserUseCase = createUserUseCase;
var createUserController = new CreateUserController_1.CreateUserController(createUserUseCase);
exports.createUserController = createUserController;
//# sourceMappingURL=index.js.map