import CaloriesDAO from "../dao/caloriesDAO.js";


export default class CaloriesController {

    // Add a new calorie consumption item by sending (with the POST method)
    // the following parameters: user_id, year, month, day, description, category, and sum.
    static async apiPostCalories(req, res, next) {
        try {

            const { user_id, description, category, amount, year, month, day } = req.body;

            // Check if all required parameters are present
            if (!user_id || !description || !category || !amount) {
                return res.status(400).json({ error: "Missing required parameters!" });
            }

            // Date validation
            if ((year && month && day) || (!year && !month && !day)) {
                // If only partial date was sent
                if (!year || !month || !day) {
                    return res.status(400).json({ error: "Date must be fully specified or fully omitted!" });
                }

                // Invalid date format check
                if (!isNaN(Date.parse(`${year}-${month}-${day}`))) {
                    return res.status(400).json({ error: "Date has wrong format or invalid parameters!" });
                }
            } else {
                // If year, month, and day are not provided by the user in the url, will use the current date
                const currentDate = new Date();
                const year = currentDate.getFullYear();
                const month =  currentDate.getMonth() + 1;
                const day =  currentDate.getDate();
            }


            const caloriesResponse = await CaloriesDAO.addCalories(
                user_id,
                year,
                month,
                day,
                description,
                category.toLowerCase(),
                amount
            );

            res.json({ status: "success" });
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    // Return the calories report of specific user by the provided date parameters (day and month)
    static async apiGetReport(req, res, next) {
        try {
            const user_id = req.query.user_id;
            const month = req.query.month;
            const year = req.query.year;

            // Check if all required parameters are present
            if (!user_id || !month || !year) {
                return res.status(400).json({ error: "Missing required parameters!" });
            }

            const report = await CaloriesDAO.getReport(user_id, year, month);
            res.json(report);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }


}