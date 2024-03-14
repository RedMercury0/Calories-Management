import DevelopersModel from "../models/developersModel.js";

export default class DevelopersDAO {

    // Retrieving all the developers information (first name,last name, personal id and email)
    static async getAllDevelopers() {
        try {
            // Get all the developers info
            return await DevelopersModel.find({}, {_id: 0}, null);
        } catch (error) {
            console.error(`Error fetching developers info: ${error}`);
            throw error;
        }
    }
}
