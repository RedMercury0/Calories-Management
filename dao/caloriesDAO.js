import CaloriesModel from '../models/caloriesModel.js';
import UsersModel from '../models/usersModel.js';

export default class CaloriesDAO {


    static async addCalories(user_id, year, month, day, description, category, sum) {
        try {
            // Check if the user exists
            const user = await UsersModel.findOne({ id: user_id },null,null);
            if (!user) {
                return { error: "User not found" };
            }

            const newCalories = new CaloriesModel({ user_id, year, month, day, description, category, sum });
            await newCalories.save();

            return { status: "success" };
        } catch (e) {
            console.error(`Unable to add calories: ${e}`);
            return { error: e.message };
        }
    }

    static async getReport(user_id, year, month) {
        try {
            // Query the database for calorie consumption items matching the provided user_id, year, and month
            const report = await CaloriesModel.find({ user_id, year, month },null,null);

            // Check if report is empty or null, if the requested report exists in the database or not
            if (!report || report.length === 0) {
                return { error: "Data with the specified parameters does not exist" }; // Return error message
            }

            // Initialize an object to store the report data
            const result = {
                breakfast: [],
                lunch: [],
                dinner: [],
                other: []
            };

            // Iterate over each calorie consumption item in the report array
            for (const item of report) {
                const { category, day, description, sum } = item;
                result[category].push({ day, description, sum });
            }

            // Return the generated report
            return result;
        } catch (error) {
            console.error(`Error fetching report: ${error}`);
            throw error;
        }
    }
}
