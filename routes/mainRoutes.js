import express from 'express';

import caloriesRoutes from "./caloriesRoutes.js";
import usersRoutes from "./usersRoutes.js";
import developersRoutes from "./developersRoutes.js";

const router = express.Router();

router.use('/', caloriesRoutes);
router.use('/', developersRoutes);

export default router;