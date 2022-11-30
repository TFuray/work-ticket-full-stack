const express = require('express')
const app = express()
const MethodOverride = require('method-override')
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan')
const bodyParser = require('body-parser')
const moment = require('moment')
const connectDB = require('./config/db')
const mainRoutes = require('./routes/main')
const ticketRoutes = require('./routes/tickets')

dotenv.config({ path: './config/config.env' })

connectDB()

// calling ticket.js from models
const Ticket = require('./models/ticket')

// set parser && global files && middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use((req, res, next) => {
  res.locals.moment = moment
  next()
})

//@index.js     route '/'
app.get('/', async (req, res) => {
  try {
    const tickets = await Ticket.find({ status: 'Open' })
      .sort({ createdAt: 'desc' })
      .lean()
    res.render('index', { tickets })
  } catch (err) {
    console.error(err)
  }
})

app.get('/add-ticket', async (req, res) => {
  try {
    await res.render('newTicket.ejs')
  } catch (err) {
    console.error(err)
  }
})

app.post('/add-ticket', async (req, res) => {
  try {
    await Ticket.create(req.body)
    res.redirect('/')
  } catch (err) {
    console.error(err)
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
