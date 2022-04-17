"use strict";
exports.__esModule = true;
exports.router = void 0;
var express_1 = require("express");
var CreateUser_1 = require("./useCases/CreateUser");
var router = (0, express_1.Router)();
exports.router = router;
router.post('/users', function (request, response) {
    return CreateUser_1.createUserController.handle(request, response);
});
//# sourceMappingURL=routes.js.map