const express = require('express')
const router = express.Router()
const ticketsController = require('../controllers/tickets')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, ticketsController.getTickets)

router.get('/add', ensureAuth, ticketsController.addTicket )

router.post('/createTicket', ticketsController.createTicket)

router.put('/markClosed', ticketsController.markClosed)

router.put('/reopen', ticketsController.reopen)

// router.get('/comment', ticketsController.addComment)

module.exports = router