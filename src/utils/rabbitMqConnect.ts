/* eslint-disable no-shadow */
import amqp from 'amqplib/callback_api';
import { saveRabbitMqMessage } from './saveRabbitMqMessage';

export function rabbitMqConnect(queue: 'social-chat') {
  amqp.connect('amqp://localhost:5672', (error0, connection) => {
    if (error0) throw error0;
    connection.createChannel((error1, channel) => {
      if (error1) throw error1;

      channel.assertQueue(queue, {
        durable: false,
      });
      // eslint-disable-next-line no-console
      console.log(' [*] Listening messages in %s', queue);
      channel.consume(
        queue,
        (msg) => {
          saveRabbitMqMessage(msg);
          channel.ack(msg!);
          channel.cancel('myconsumer');
        },
        { consumerTag: 'myconsumer' },
      );
    });
  });
}
