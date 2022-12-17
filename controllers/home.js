const Ticket = require("../models/Ticket")
const User = require("../models/User")

module.exports = {
  getIndex: (req,res)=>{
    res.render('index')
  },

  getDashboard: async (req,res)=>{
    try {
      let anyone = 'Anyone'
      const tickets = await Ticket.find({clientId: req.user._id}).lean()
      const user = await User.findOne({userName: req.user.userName}).lean()
      const assignedTickets = await Ticket.find({assignedTo: req.user.userName}).lean()
      const anyoneTickets= await Ticket.find({assignedTo: req.user.userName && 'Anyone'}).lean()

      res.render('dashboard', {tickets, user, assignedTickets, anyoneTickets})
    } catch (err) {
     console.log(err) 
     res.render('error/500')
    }
  },

  deleteTicket: async (req, res)=> {
    try {
      let ticket = await Ticket.findById({_id: req.params.id })
      await Ticket.remove({ _id: req.params.id})
      console.log("Deleted Post")
      res.redirect('/dashboard')
    } catch (err) {
        console.log(err); 
        res.redirect('/dashboard')
    }
  }

  // deleteTicket: async (req, res) => {
  //   console.log(req.body.publicJSFile)
  //   try {
  //     await Ticket.findOneAndDelete(
  //       {_id: req.body.publicJSFile}
  //     )
  //       console.log(req.body.publicJSFile)
  //       res.json('Deleted Ticket') 
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
}