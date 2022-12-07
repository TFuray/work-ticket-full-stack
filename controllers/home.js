const Ticket = require("../models/Ticket")

module.exports = {
  getIndex: (req,res)=>{
    res.render('index')
  },

  getDashboard: async (req,res)=>{
    try {
      const tickets = await Ticket.find({clientId: req.user._id}).lean()
      console.log(tickets)
      res.render('dashboard', {tickets})
    } catch (err) {
     console.log('err') 
     res.render('error/500')
    }
  },
}