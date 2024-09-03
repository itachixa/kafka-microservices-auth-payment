
import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'microservice-payment',
  brokers: [ 'localhost:9092']
})

const consumer = kafka.consumer({ groupId: 'payment-group' });

const run = async () => {
  await consumer.connect();
  console.log('Microservice Payment: Consumer connected');

  await consumer.subscribe({ topic: 'auth-topic', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const user = JSON.parse(message.value.toString());
      console.log(`Received user info:, ${message.value.toString()}`);

      // Here you could use the user info to fetch and display their transactions
    },
  });
};

run().catch(console.error);
