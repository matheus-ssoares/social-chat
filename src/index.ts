/* eslint-disable no-console */
import express from 'express';
import http from 'http';
import dotenv from 'dotenv';
import { Server } from 'socket.io';
import { router } from './routes';

dotenv.config();

const PORT = process.env.PORT || 7000;

const app = express();

app.use(express.json({ limit: '10000mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(router);

const expressServer = http.createServer(app);

const io = new Server(expressServer);

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

expressServer.listen(PORT, () => console.log(`Listening on port ${PORT}`));

export { io };
