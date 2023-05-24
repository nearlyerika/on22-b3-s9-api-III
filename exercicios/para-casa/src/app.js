// Imports /////////////////////////////////////////////////////
const express = require("express")
const app = express()
const movieRoutes = require('./routers/routes')

// App config //////////////////////////////////////////////////
app.use(express.json())
app.use('/movies', movieRoutes)

// Exports /////////////////////////////////////////////////////
module.exports = app