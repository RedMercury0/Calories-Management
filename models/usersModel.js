import mongoose from 'mongoose';

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