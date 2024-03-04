import CaloriesModel from '../models/caloriesModel.js';
import UsersModel from '../models/usersModel.js';

export default class CaloriesDAO {

    // Adding a new calories report for specific user if the user id exists in the database
    static async addCalories(user_id, year, month, day, description, category, amount) {
        try {
            // Check if the user exists
            const user = await UsersModel.findOne({ id: user_id },null,null);
            if (!user) {
                return { error: "User not found" };
            }

            const newCalories = new CaloriesModel({ user_id, year, month, day, description, category, amount });
            await newCalories.save();

            return { status: "success" };
        } catch (e) {
            console.error(`Unable to add calories: ${e}`);
            return { error: e.message };
        }
    }

    // Fetching all the calories reports for specific user by his id and the date( day and month )
    // If no reports exits it return empty report
    static async getReport(user_id, year, month) {
        try {
            // Query the database for calorie consumption items matching the provided user_id, year, and month
            const report = await CaloriesModel.find({ user_id, year, month },null,null);



            // Initialize an object to store the report data
            const result = {
                breakfast: [],
                lunch: [],
                dinner: [],
                other: []
            };

            // Iterate over each calorie consumption item in the report array
            for (const item of report) {
                const { category, day, description, amount } = item;
                result[category].push({ day, description, amount });
            }

            // Return the generated report
            // If the report was empty it return the empty result( as it was initialized with no new data inside it)
            return result;
        } catch (error) {
            console.error(`Error fetching report: ${error}`);
            throw error;
        }
    }
}
