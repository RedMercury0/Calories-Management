import mongoose from 'mongoose';

// The developers data model with the parameters:
// first name, last name , id and email

const developerSchema = new mongoose.Schema({

    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }

}, { versionKey: false });

const DeveloperModel = mongoose.model('Developer', developerSchema);

export default DeveloperModel;