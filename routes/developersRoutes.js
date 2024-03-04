import express from "express";
import DevelopersCtrl from "../controllers/developersController.js"


const developersRouter = express.Router();


// Creating the "about" route with the get method, route to get the "about"(information) of the project developers
developersRouter.route("/about").get(DevelopersCtrl.apiGetAbout);

// Export the route so we can use in another file
export default developersRouter;