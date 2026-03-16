import 'dotenv/config'
import mongoose from 'mongoose'

const connectionString = process.env.MONGO_DB_CONNECTION_STRING

function connectDB () {
mongoose
    .connect(connectionString)
    .then(() => console.log('Successfully connected to MongoDB!'))
    .catch(err => console.error('Connection error', err));
}

export default connectDB;