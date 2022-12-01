const Ticket = require('../models/Ticket')

module.exports = {
  getTickets: async (req, res) => {
    console.log(req.user)
    try {
      const ticketItems = await Ticket.find({ userId: req.user.id })
        .sort({date: "desc"})
        .lean()
      res.render('dashboard', { tickets: ticketItems, user: req.user.userName })
    } catch (err) {
      console.log(err)
    }
  },
  addTicket: async (req, res) => {
    try {
      res.render('tickets/add')
    } catch (err) {
      console.log(err)
    }
  },
  createTicket: async (req, res) => {
    try {
      await Ticket.create({
        nameOfJob: req.body.nameOfJob,
        location: req.body.location,
        description: req.body.description,
        date: req.body.date,
        comments: req.body.comments,
        clientName: req.user.userName,
        clientId: req.user.id,
        completed: 'false',
      })
      console.log('Ticket added')
      res.redirect('/tickets')
    } catch (err) {
      console.log(err)
    }
  }
}
