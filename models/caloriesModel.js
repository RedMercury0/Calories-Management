import mongoose from 'mongoose';

const calorieSchema = new mongoose.Schema({
    user_id: {
        type: String,
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