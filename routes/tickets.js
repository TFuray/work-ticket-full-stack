const express = require('express')
const router = express.Router()
const ticketsController = require('../controllers/tickets')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, ticketsController.getTickets)

router.get('/add', ensureAuth, ticketsController.addTicket )

router.post('/createTicket', ensureAuth, ticketsController.createTicket)

router.put('/markClosed', ensureAuth, ticketsController.markClosed)

router.put('/reopen', ensureAuth, ticketsController.reopen)

router.get('/addComment/:id', ensureAuth, ticketsController.addComment) 

router.get('/:id', ensureAuth, ticketsController.showSingleTicket)

router.post('/addComment/:id', ensureAuth, ticketsController.saveComment)


// router.get('/comment', ticketsController.addComment)

module.exports = router