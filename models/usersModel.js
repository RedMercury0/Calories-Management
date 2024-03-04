import mongoose from 'mongoose';

// The users  data model with the parameters:
// id, first name, last name and birthday(date type)

const userSchema = new mongoose.Schema({

    id: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        required: true
    }

}, { versionKey: false });

const UserModel = mongoose.model('User', userSchema);

export default UserModel;