const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')

//Load env Variables
dotenv.config({ path: './config/config.env'})

const app = express()

const PORT = process.env.PORT || 5000

app.listen(PORT, 
  console.log(`Server running in ${process.env.NODE_ENV} mode on Port ${process.env.PORT}`.rainbow.bold.underline)
)