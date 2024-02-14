// Imports
import express from "express";
import cors from "cors";
import mainRoutes from './routes/mainRoutes.js';

const app = express();

// Express middleware
app.use(cors());
app.use(express.json()) //allow the server to accept json in the body of the request

// Initial routes specification (urls accessed that are used to send and receive information)
// Main routes
app.use('/', mainRoutes);

// Handle 404 errors
app.use('*', (req, res) => {
    res.status(404).json({ error: 'Not found' });
});

// Export the app as a module
// Allow us to import in the file that access the database
export default app;

