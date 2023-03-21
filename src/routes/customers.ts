const express = require('express');
const router = express.Router();

const Models = require('../models/customerModel.ts');
const Customers = Models.Customer;
const getCustomer = require('../middlewares/getCustomer.ts')


//GET ALL CUSTOMERS

router.get('/', async (req: any, res: any) => {
  try {
    const customers = await Customers.find();
    res.json(customers);
  }
  catch (err: any) {
    res.status(500).json({ message: err.message })
  }
})

//GET ONE CUSTOMER

router.get('/:id', getCustomer, (req: any, res: any) => {
  res.json(res.customer)
})

//CREATE CUSTMOER

router.post('/', async (req: any, res: any) => {

  const customer = new Customers({
    Email: req.body.Email,
    Name: req.body.Name,
    Surname: req.body.Surname,
    City: req.body.City,
    Birthday: req.body.Birthday
  })

  try {
    const newCustomer = await customer.save()
    res.status(201).json(newCustomer);
  }
  catch (err: any) {
    res.status(400).json({ message: err.message })
  }
})

//UPDATE CUSTOMER

router.patch('/:id', getCustomer, (req: any, res: any) => {
})

//DELETE CUSTOMER

router.delete('/:id', getCustomer, (req: any, res: any) => {
})

//CALCULATE 




module.exports = router;

export { };

