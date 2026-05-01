import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

let db;

export const connectDB = async () => {
  await client.connect();
  db = client.db('AH20232CP1');
  console.log('DB conectada');
};

export const getDB = () => db;