const mongoose = require('mongoose')

const TicketSchema = new mongoose.Schema({
  nameOfJob: {
    type: String,
    required: true
  },
  clientName: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now
  },
  dateComplete: {
    type: Date
  },
  comments: {
    type: String,
  }
})

 
module.exports = mongoose.model('Ticket', TicketSchema)
