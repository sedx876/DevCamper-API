const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const colors = require('colors')
const connectDB = require('./config/db')


//Middleware
const logger = require('./middleware/logger')

//Load env Variables
dotenv.config({ path: './config/config.env'})

//Connect to DB
connectDB()

//Route Files
const bootcamps = require('./routes/bootcamps')

const app = express()

//Dev Logging Middleware
if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'))
}

app.use(logger)

//Mount routers
app.use('/api/v1/bootcamps', bootcamps)

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, 
  console.log(`Server running in ${process.env.NODE_ENV} mode on Port ${process.env.PORT}`.rainbow.bold.underline)
)

//Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error ${err.message}`)
  //Close server & exit process
  server.close(() => process.exit(1))
})