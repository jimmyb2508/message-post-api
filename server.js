const express = require('express');
const mongoose = require('mongoose');
const morgan = require ('morgan');
const cors = require('cors');
const path = require('path');
const { stringify } = require('querystring');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

const MONGODB_URI = process.env.MONGODB_URI

mongoose.connect(MONGODB_URI || 'mongodb://localhost/post_msg', {
  useNewUrlParser:true,
  useUnifiedTopology:true,
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected!');
});

// Data Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS
app.use(cors());

// HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);

app.listen(PORT, console.log(`Server is starting in ${PORT}`))