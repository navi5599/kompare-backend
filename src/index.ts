require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());

async function connect() {
  try {
    await mongoose.connect(process.env.DATABASE_URL)
    console.log('Connected to MongoDB')
  } catch (err) {
    console.log(err)
  }
}

connect();









const port = process.env.PORT || 8080;
app.listen(port, '0.0.0.0', () => {
  console.log('Running on Port: ' + port);
});