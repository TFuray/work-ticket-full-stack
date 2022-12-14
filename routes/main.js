const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')
const ticketsController = require('../controllers/tickets')
const homeController = require('../controllers/home')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', homeController.getIndex)
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)
router.get('/dashboard', ensureAuth, homeController.getDashboard)
router.delete('/home/deleteTicket/:id', homeController.deleteTicket)
router.put('/markClosed', ensureAuth, ticketsController.markClosed)

module.exports = router
