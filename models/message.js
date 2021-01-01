const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;
const MessageSchema = new Schema({
  message: String,
  date: {
    type: String,
    default: Date.now()
  }
});

// Model
const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;