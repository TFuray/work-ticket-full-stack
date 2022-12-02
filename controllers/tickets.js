const Ticket = require('../models/Ticket')

module.exports = {
  getTickets: async (req, res) => {
    console.log(req.user)
    try {
      const tickets = await Ticket.find({ completed: false })
        // .populate('User')
        .sort({ date: "desc" }) 
        .lean()

      res.render('tickets/index', { tickets, })
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
  },

  markClosed: async (req, res) =>{
    try {
      await Ticket.findOneAndUpdate({ _id: req.body._id}, {
        completed: true
      })
      res.redirect('/tickets/index')
    } catch (err) {
      console.log(err)
    }
  }

  // postIndex: async (req, res) => {
  //   try {
  //     const tickets = await Ticket.find({completed: false})
  //       .populate('user')
  //       .sort({date: 'desc'})
  //       .lean()
  //   } catch (err) {
  //     console.log(err)
  //     res.render('error/500')
  //   }
  //   },
    
  }
