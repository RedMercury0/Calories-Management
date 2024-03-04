import express from "express";
import CaloriesCtrl from "../controllers/caloriesController.js"


const caloriesRouter = express.Router();


// Creating the "addcalories" route with the post method, route to add new calories to a user
caloriesRouter.route("/addcalories").post(CaloriesCtrl.apiPostCalories);


// Creating the report route with the get method, route to get specific report by user id, month and year
caloriesRouter.route("/report").get(CaloriesCtrl.apiGetReport);


// Export the route so we can use in another file
export default caloriesRouter;