const express = require('express');

const router = express.Router();

const Message = require('../models/message');

// Routes
router.get('/', (req,res) => {
  Message.find({ })
    .then((data) => {
      console.log('Data: ', data);
      res.json(data);
    })
    .catch((error) => {
      console.log('error: ', error)
    });
});

router.post('/create', (req, res) => {
  const data = req.body;

  const newMessage = new Message(data);
  
  newMessage.save((error) => {
    if (error) {
      res.status(500).json({ msg: 'Sorry, internal server error!'})
    } else {
      res.json({
        message: 'Data saved!'
      });
    }
  })
});

module.exports = router;