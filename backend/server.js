require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

// express app
const app = express()

// this request will fire every request that comes in
// Middleware
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

/**
 * Returns x raised to the n-th power.
 *
 * @param {number} x The number to raise.
 * @param {number} n The power, must be a natural number.
 * @return {number} x raised to the n-th power.
 */
/* ======================================================================
1st param ==> Url that has to start with /api/workouts/anythingElse
2nd param ==> Attaches all of the routes to the app declared in
              ./routes/workouts
====================================================================== */
app.use('/api/workouts', workoutRoutes)

//  connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {

  // listen for requests
app.listen(process.env.PORT,() => {
  console.log("Connected to db and Listening on port", process.env.PORT);
})
})
.catch((error) => {
  console.log(error)
})

// If I make a changes in a file and save it, I need to restart the application. Hence we need nodemon for auto reestarting it.
// Command is npx nodemon server.js


//  environment variables remain hidden when you push code to the github.

// For autheticate connection