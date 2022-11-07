const mongoose = require('mongoose')
const { Schema, model } = mongoose

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
  estimatedCost: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    default: 'Open',
    enum: ['Open', 'Closed']
  },
  date: {
    type: Date,
    default: Date.now
  },
  dateComplete: {
    type: Date
  },
  description: {
    type: String,
    required: true
  },
  hoursWorked: {
    type: Number
  },
  totalCost: {
    type: Number
  }
})

 
module.exports = mongoose.model('Ticket', TicketSchema)
