const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')

//Route Files
const bootcamps = require('./routes/bootcamps')

//Load env Variables
dotenv.config({ path: './config/config.env'})

const app = express()

//Mount routers
app.use('/api/v1/bootcamps', bootcamps)

const PORT = process.env.PORT || 5000

app.listen(PORT, 
  console.log(`Server running in ${process.env.NODE_ENV} mode on Port ${process.env.PORT}`.rainbow.bold.underline)
)