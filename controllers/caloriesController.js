import CaloriesDAO from "../dao/caloriesDAO.js";


export default class CaloriesController {

    // Add a new calorie consumption item by sending (with the POST method)
    // the following parameters: user_id, year, month, day, description, category, and sum.
    static async apiPostCalories(req, res, next) {
        let caloriesResponse;
        const validCategories = ['breakfast', 'lunch', 'dinner', 'other'];

        try {

            const { user_id, description, category, amount, year, month, day } = req.body;

            // Check if all required parameters are present
            if (!user_id || !description || !category || !amount) {
                return res.status(400).json({ error: "Missing required parameters!" });
            }
            // Category validation
            if (!validCategories.includes(category)) {
                return res.status(400).json({ error: "Invalid category value!" });
            }

            // Date validation
            // If year, month, and day are not provided by the user in the url, will use the current date
            if(!year && !month && !day) {
                const currentDate = new Date();
                const currentYear = currentDate.getFullYear();
                const currentMonth =  currentDate.getMonth() + 1;
                const currentDay =  currentDate.getDate();

                caloriesResponse = await CaloriesDAO.addCalories(
                    user_id,
                    currentYear,
                    currentMonth,
                    currentDay,
                    description,
                    category.toLowerCase(),
                    amount
                );

            } else if (!year || !month || !day) {

                // If only partial date was sent
                return res.status(400).json({ error: "Date must be fully specified or fully omitted!" });

            }else if (year && month && day) {

                // Invalid date format check
                if (isNaN(Date.parse(`${year}-${month}-${day}`))) {
                    return res.status(400).json({ error: "Date has wrong format or invalid parameters!" });
                }

                // Parse year as integers
                const parsedYear = parseInt(year);

                // Check if year is within a reasonable range (current year +/- 100)
                const currentYear = new Date().getFullYear();
                const minYear = currentYear - 100;
                const maxYear = currentYear + 100;

                if (parsedYear < minYear || parsedYear > maxYear) {
                    return res.status(400).json({ error: "Year is out of range!" });
                }

                caloriesResponse = await CaloriesDAO.addCalories(
                    user_id,
                    year,
                    month,
                    day,
                    description,
                    category.toLowerCase(),
                    amount
                );
            }


            res.json(caloriesResponse);
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