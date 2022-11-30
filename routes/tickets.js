const express = require('express')
const router = express.Router()
const ticketsController = require('../controllers/tickets')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, ticketsController.getTickets)

// router.post('/createTodo', ticketsController.createTodo)

// router.put('/markComplete', ticketsController.markComplete)

// router.put('/markIncomplete', ticketsController.markIncomplete)

// router.delete('/deleteTodo', ticketsController.deleteTodo)

module.exports = router