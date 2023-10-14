import * as mongoose from "mongoose";
import {MongoClient} from "mongodb";

const connectDB = async () => {
    const client = new MongoClient(process.env.MONGODB_URI!)
    try {
        if (mongoose.connection.readyState === 0) {
            await client.connect()
            const myDb = await client.db('invoice').collection('invoice').find()
            console.log('db connected')
            console.log('myDb', myDb)
        }
    } catch (error) {
        console.log(error)
    }
}

export default connectDB