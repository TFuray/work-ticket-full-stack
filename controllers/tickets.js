const Ticket = require('../models/Ticket')

module.exports = {
  getTickets: async (req, res) => {
    console.log(req.user)
    try {
      const tickets = await Ticket.find()
        // .populate('User')
        .sort({ date: 'desc' })
        .lean()

      res.render('tickets/index', { tickets })
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
        completed: 'false'
      })
      console.log('Ticket added')
      res.redirect('/tickets')
    } catch (err) {
      console.log(err)
    }
  },

  markClosed: async (req, res) => {
    try {
      await Ticket.findOneAndUpdate(
        { _id: req.body.publicJSFile },
        {
          completed: true
        }
      )
      console.log('Marked Closed')
      res.json('Marked Closed')
    } catch (err) {
      console.log(err)
    }
  },

  reopen: async (req, res) => {
    try {
      await Ticket.findOneAndUpdate(
        {_id: req.body.publicJSFile },
        {
          completed: false
        }
      )
      console.log('Marked Open')
      res.json('Marked Open')
    } catch (err) {
     console.log(err) 
    }
  },


//   addComment: async (req, res) => {
//     try {
      
//     } catch (err) {
      
//     }
//   }

}