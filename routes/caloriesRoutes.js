import express from "express";
import CaloriesCtrl from "../controllers/caloriesController.js"

// When people go to the url this will route to different parts of the application
const caloriesRouter = express.Router();

// Creating routing
//The automatic test will try to add a new calorie consumption item by sending (with the POST method)
//the following parameters: user_id, year, month, day, description, category, and sum. The category will be one of the available ones, according to this document.
caloriesRouter.route("/addcalories").post(CaloriesCtrl.apiPostCalories); //add calories to user

//The automatic test will try to get the report for a specific month, year and user by sending (with the GET method)
// the following parameters: user_id, month, and year. The expected returned document should look as the following example:
// {
// 	“breakfast”:[{“day”:21,”description”:”chocolate in ikea”,”amount”:300},{“day”:5,”description”:”milk”,”sum”:6} ],
// 	“lunch”:[ ],
// 	“dinner”:[ ],
// 	“other”:[ ]
// }
caloriesRouter.route("/report/:user_id/:month/:year").get(CaloriesCtrl.apiGetReport); // get report for the user

// Export the route so we can use in another file
export default caloriesRouter;