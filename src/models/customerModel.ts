const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  Email: { type: String, required: true },
  Name: { type: String, required: true },
  Surname: { type: String, required: true },
  City: { type: String, required: true },
  Birthday: { type: Date, required: true }
})

let Customer = mongoose.model('Customer', customerSchema);

module.exports.Customer = Customer;




