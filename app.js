const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan')
const { engine } = require('express-handlebars')
const moment = require('moment')
const connectDB = require('./config/db')
const mainRoutes = require('./routes/main')
const ticketRoutes = require('./routes/tickets')

require('dotenv').config({ path: './config/config.env' })

// Passport config
require('./config/passport')(passport)

// connect MongoDB
connectDB()

// init app
const app = express()

// Handlebars
app.engine(
  'hbs',
  engine({
    extname: 'hbs',
    layoutsDir: './views/layouts/'
  })
)
app.set('view engine', 'hbs')
app.set('views', './views')



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
