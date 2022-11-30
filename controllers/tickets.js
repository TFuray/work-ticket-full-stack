const Ticket = require('../models/Ticket')

module.exports = {
  getTickets: async (req, res)=>{
    console.log(req.user)
    try {
      const ticketItems = await Ticket.find({ userId: req.user.id})
      res.render('tickets/index', {tickets: ticketItems, user: req.user})
    } catch (err) {
      console.log(err)
    }
  },
}
