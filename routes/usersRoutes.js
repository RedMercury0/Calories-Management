import express from "express";
import UsersCtrl from "../controllers/usersController.js"

// When people go to the url this will route to different parts of the application
const usersRouter = express.Router();

// Creating routing


// Export the route so we can use in another file
export default usersRouter;