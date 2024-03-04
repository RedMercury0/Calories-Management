import DevelopersModel from "../models/developersModel.js";

export default class DevelopersDAO {

    static async getAllDevelopers() {
        try {
            // Get all the developers info
            const allDevelopers = await DevelopersModel.find({},{ _id: 0 },null);

            return allDevelopers;
        } catch (error) {
            console.error(`Error fetching report: ${error}`);
            throw error;
        }
    }
}
