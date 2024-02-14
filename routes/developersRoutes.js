import express from "express";
import DevelopersCtrl from "../controllers/developersController.js"

// When people go to the url this will route to different parts of the application
const developersRouter = express.Router();

// Creating routing
//_____/about/ for getting (using the GET method) a JSON that is an array of objects that describe the developers.
// Each developer should be described using the firstname, lastname, id, and email.
//
// example:
// [{“firstname”:”dave”,”lastname”:”cohen”,”id”:234234,”email”:”daddd@gmail.com”},{“firstname”:”tal”,”lastname”:”levy”,”id”:34534544,”email”:”tal@gmail.com”} ]

developersRouter.route("/about").get(DevelopersCtrl.apiGetAbout); // get the "about" or the project developers

// Export the route so we can use in another file
export default developersRouter;