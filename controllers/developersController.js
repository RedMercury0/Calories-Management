import DeveloperDAO from "../dao/developersDAO.js";

export default class DevelopersController {

    static async apiGetAbout(req, res, next) {
        try {

            const developersInfo = await DeveloperDAO.getAllDevelopers();

            res.json(developersInfo);

        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

}