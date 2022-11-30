const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('express-flash')
const logger = require('morgan')
const { engine } = require('express-handlebars')
const connectDB = require('./config/db')
const mainRoutes = require('./routes/main')
const ticketsRoutes = require('./routes/tickets')

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

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(logger('dev'))

// Sessions
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_STRING }),
  })
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

// Routes
app.use('/', mainRoutes)
app.use('/tickets', ticketsRoutes)


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`)
})
