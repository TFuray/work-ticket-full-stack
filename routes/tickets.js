const express = require('express')
const router = express.Router()
const ticketsController = require('../controllers/tickets')
const { ensureAuth } = require('../middleware/auth')