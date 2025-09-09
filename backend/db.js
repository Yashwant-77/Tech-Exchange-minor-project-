import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongodbURL = process.env.MONGO_DB_URL

const connectToMongoDB = () => {
    try {
        mongoose.connect(mongodbURL);
        console.log("Connected to MongoDB successfully");
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}
export default connectToMongoDB;