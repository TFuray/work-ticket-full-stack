const Ticket = require("../models/Ticket")
const User = require("../models/User")

module.exports = {
  getIndex: (req,res)=>{
    res.render('index')
  },

  getDashboard: async (req,res)=>{
    try {
      const tickets = await Ticket.find({clientId: req.user._id}).lean()
      // const user = await User.findone({_id: req.user._id})
      // console.log(req)
      const user = await User.findOne({userName: req.user.userName}).lean()
      const assignedTickets = await Ticket.find({assignedTo: req.userName})
      res.render('dashboard', {tickets, user})
    } catch (err) {
     console.log('err') 
     res.render('error/500')
    }
  },

  deleteTicket: async (req, res) => {
    console.log(req.body.publicJSFile)
    try {
      await Ticket.findOneAndDelete(
        {_id: req.body.publicJSFile}
      )
        console.log(req.body.publicJSFile)
        res.json('Deleted Ticket') 
    } catch (err) {
      console.log(err)
    }
  }
}