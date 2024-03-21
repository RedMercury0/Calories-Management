import mongoose from 'mongoose';

// The calories report data model with the parameters:
// user id, the date of the report (year,month,day) , description, category(only from the allowed categories) and amount of calories

const calorieSchema = new mongoose.Schema({
    user_id: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    month: {
        type: Number,
        required: true
    },
    day: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['breakfast', 'lunch', 'dinner', 'other'], // Define allowed categories
        required: true
    },
    amount: {
        type: Number,
        required: true
    }

}, { versionKey: false });

const CalorieModel = mongoose.model('Calorie', calorieSchema);

export default CalorieModel ;