const mongoose = require("mongoose")

// Schema defines the structure of a particular document inside our db.
const Schema = mongoose.Schema

const workoutSchema = new Schema({
  title: { type: String, required: true },
  reps:  { type: Number, required: true },
  load:  { type: Number, required: true }
}, {timestamps: true})

module.exports = mongoose.model('Workout', workoutSchema)



// to get them all
// Workout.find()



