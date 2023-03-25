require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// const url = process.env.DATABASE_URL;

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/mydatabase', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Connected to MongoDB')
  } catch (err) {
    console.log(err)
  }
}

connect();

const customersRoutes = require('./routes/customers.ts');
app.use('/customers', customersRoutes)

export { };




const port = process.env.PORT || 8080;
app.listen(port, '0.0.0.0', () => {
  console.log('Running on Port: ' + port);
});