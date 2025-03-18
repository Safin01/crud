import mongoose from "mongoose";

const connectMongoDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("Connected")
    } catch (error) {
        console.log(error)
    };
}

export default connectMongoDb;