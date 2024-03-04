// Imports
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './server.js';

// Setting up the environment variables (.env)
dotenv.config();
const mongo_username = process.env.MONGODB_USERNAME;
const mongo_password = process.env.MONGODB_PASSWORD;
const port = process.env.PORT || 8000; // Server PORT

// The connection string to the mongo database
const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.5hyk38t.mongodb.net/Calories-Manager`;

// Connect to MongoDB using Mongoose
mongoose.connect(uri);

const client = mongoose.connection;

client.on('error', console.error.bind(console, 'MongoDB connection error:'));
client.once('open', async () => {
    console.log('Connected to MongoDB');

    // Start server
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});
