//  In order to prevent writing all endpoints in the the server.js file, we write them here.
// This file is registered for different routes. So, we want to bloat with db logic here, things that we might need to do in handle functions.


const express = require('express')
const {
  getWorkouts,
  getWorkout,
  deleteWorkout,
  createWorkout,
  updateWorkout
} = require('../controllers/workoutController')


// Creates an instance of Route for us.
const router = express.Router()

// GET all workouts
router.get('/', getWorkouts)

// GET a single workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout);

// DELETE a workout
router.delete('/:id', deleteWorkout)

// UPDATE a workout
router.patch('/:id', updateWorkout)


module.exports = router