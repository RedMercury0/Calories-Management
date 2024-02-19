import CaloriesDAO from "../dao/caloriesDAO.js";
import UsersDAO from "../dao/usersDAO.js";

export default class CaloriesController {

    // add a new calorie consumption item by sending (with the POST method)
    // the following parameters: user_id, year, month, day, description, category, and sum.
    static async apiPostCalories(req, res, next) {
        try {

            const { user_id, description, category, sum } = req.body;

            // If year, month, and day are not provided, use the current date
            const currentDate = new Date();
            const year = req.body.year || currentDate.getFullYear();
            const month = req.body.month || currentDate.getMonth() + 1;
            const day = req.body.day || currentDate.getDate();

            const caloriesResponse = await CaloriesDAO.addCalories(
                user_id,
                year,
                month,
                day,
                description,
                category.toLowerCase(),
                sum
            );

            res.json({ status: "success" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async apiGetReport(req, res, next) {
        try {
            const user_id = req.query.user_id;
            const month = req.query.month;
            const year = req.query.year;

            // Check if all required parameters are present
            if (!user_id || !month || !year) {
                return res.status(400).json({ error: "Missing required parameters" });
            }

            const report = await CaloriesDAO.getReport(user_id, year, month);
            res.json(report);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }


}