const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const RequestSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  msg: {
    type: String,
    required: true
  },
  skills: {
    type: String,
    required: true
  },
  
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = Msg = mongoose.model('Msg', RequestSchema);