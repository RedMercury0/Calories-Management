import express from 'express';

import caloriesRoutes from "./caloriesRoutes.js";
import usersRoutes from "./usersRoutes.js";
import developersRoutes from "./developersRoutes.js";

// When people go to the url this will route to different parts of the application

const router = express.Router();

// Our main routes to different parts of the application
router.use('/', caloriesRoutes);
router.use('/', developersRoutes);

export default router;