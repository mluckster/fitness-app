const mongoose = require('mongoose')
const Schema = mongoose.Schema

const exerciseSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    sets: {
        type: Number,
        min: 1,
        required: true,
    },
    reps: {
        type: Number,
        min: 1,
        required: true,
    },
    note: String
})

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now()
    }, 
    exercise: [exerciseSchema],
}, { 
    timestamps: true,
})

module.exports = mongoose.model('Workout', workoutSchema)