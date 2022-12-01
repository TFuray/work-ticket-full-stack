const Ticket = require('../models/Ticket')

module.exports = {
  getTickets: async (req, res)=>{
    console.log(req.user)
    try {
      const ticketItems = await Ticket.find({ userId: req.user.id})
      res.render('dashboard', {tickets: ticketItems, user: req.user.userName})
    } catch (err) {
      console.log(err)
    }
  },
  addTicket: async (req, res) => {
    try {
      res.render('tickets/add',)
    } catch (err) {
      console.log(err)
    }
  },
  createTicket: async (req, res) => {
    try {
      await (Ticket.create({}))
    } catch (err) {
      
    }
  }
}
