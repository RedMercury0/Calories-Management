import DevelopersModel from "../models/developersModel.js";

export default class DevelopersDAO {

    static async getAllDevelopers(user_id, year, month) {
        try {
            // Get all the developers info
            const allDevelopers = await DevelopersModel.find({},null,null);

            return allDevelopers;
        } catch (error) {
            console.error(`Error fetching report: ${error}`);
            throw error;
        }
    }
}
