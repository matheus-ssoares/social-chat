"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.io = void 0;
/* eslint-disable no-console */
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var dotenv_1 = __importDefault(require("dotenv"));
var socket_io_1 = require("socket.io");
var routes_1 = require("./routes");
dotenv_1["default"].config();
var PORT = process.env.PORT || 7000;
var app = (0, express_1["default"])();
app.use(routes_1.router);
var expressServer = http_1["default"].createServer(app);
var io = new socket_io_1.Server(expressServer);
exports.io = io;
io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});
expressServer.listen(PORT, function () { return console.log("Listening on port ".concat(PORT)); });
//# sourceMappingURL=index.js.map