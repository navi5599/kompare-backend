const Models = require('../models/customerModel.ts');
const Customers = Models.Customer;

//Middleware function

async function getCustomer(req: any, res: any, next: any) {

  let customer;

  try {
    customer = await Customers.findById(req.params.id)
    if (customer == null) {
      return res.status(404).json({ message: 'Cant find customer with given id' })
    }
  }
  catch (err: any) {
    res.status(500).json({ message: err.message })
  }

  res.customer = customer;
  next();
}

module.exports = getCustomer;