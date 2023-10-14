import { MongoClient } from "mongodb";

const connectDB = async () => {
  const client = new MongoClient(process.env.MONGODB_URI!);
  try {
    await client.connect();
    return client;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
