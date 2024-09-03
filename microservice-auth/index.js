
import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'microservice-auth',
  brokers: [ 'localhost:9092']
});

const producer = kafka.producer();

const run = async () => {
  await producer.connect();
  console.log('Microservice Auth: Producer connected');

  // Simulate a user authentication event
  const user = {
    userId: '12345',
    token: 'eyJhbGciOiJIUzI1NiIsIn...'
  };

  try {
    await producer.send({
      topic: 'auth-topic',
      messages: [{ value: JSON.stringify(user) }],
    });
    console.log('User authenticated:', user);
  } catch (err) {
    console.error('Error sending message', err);
  }
};

run().catch(console.error);
