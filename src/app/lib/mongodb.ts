import { MongoClient } from "mongodb";

const connectDB = async () => {
  const client = new MongoClient(process.env.MONGODB_URI!);
  try {
    await client.connect();
    return client;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default connectDB;
