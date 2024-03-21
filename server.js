
import express from "express";
import cors from "cors";

import mainRoutes from './routes/mainRoutes.js';

const app = express();

// Middleware to enable CORS
app.use(cors());

// Middleware to parse JSON in the request body
app.use(express.json());

// Middleware to handle JSON syntax errors
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        res.status(400).json({ error: 'Invalid JSON syntax' });
    } else {
        next();
    }
});

// Initial routes specification
// Main routes
app.use('/', mainRoutes);

// Handle 404 errors
app.use('*', (req, res) => {
    res.status(404).json({ error: 'Not found' });
});

// Export the app as a module
// Allow us to import in the file that access the database
export default app;

