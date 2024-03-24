import mongoose from 'mongoose';

const connectToMongoDB = () =>
{
    try {
        mongoose.connect(process.env.MONGO_DB_URI)
        console.log('Mongo DB connected!');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectToMongoDB;
