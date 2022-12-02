const mongoose = require('mongoose')

const TicketSchema = new mongoose.Schema({
  nameOfJob: {
    type: String,
    required: true
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  clientName: {
    type: String
  },
  assignedTo: {
    type: String,
    default: 'Anyone'
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
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  },
  comments: {
    type: String
  },
  completedBy: {
    type: String
  },
})

module.exports = mongoose.model('Ticket', TicketSchema)
