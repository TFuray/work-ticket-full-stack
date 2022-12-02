const Ticket = require("../models/Ticket")

module.exports = {
  getIndex: (req,res)=>{
    res.render('index')
  },

  getDashboard: async (req,res)=>{
    try {
      const tickets = await Ticket.find({ user: req.user.id }).lean()
      res.render("dashboard", {
        name: req.user.userName,
        tickets
      })
    } catch (err) {
     console.log('err') 
     res.render('error/500')
    }
  },
}