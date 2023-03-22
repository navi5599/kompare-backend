const Joi = require('joi');
const express = require('express');
const router = express.Router();

const Models = require('../models/customerModel.ts');
const Customers = Models.Customer;
const getCustomer = require('../middlewares/getCustomer.ts')
const userSchema = require('../middlewares/userValidationSchema.ts')


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

  const { error } = userSchema.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

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

router.patch('/:id', getCustomer, async (req: any, res: any) => {

  const { error } = userSchema.validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const allowedUpdates = ['Email', 'Name', 'Surname', 'City', 'Birthday'];
  const updates: any = {};

  Object.keys(req.body).forEach((key) => {
    if (allowedUpdates.includes(key)) {
      updates[key] = req.body[key];
    }
  });

  Object.assign(res.customer, updates);

  try {
    const updatedCustomer = await res.customer.save();
    res.json(updatedCustomer);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }


})

//DELETE CUSTOMER

router.delete('/:id', getCustomer, async (req: any, res: any) => {

  try {
    await Customers.findOneAndRemove({ _id: req.params.id })
    res.json({ message: 'Customer successfully removed' })
  }
  catch (err: any) {
    res.status(500).json({ message: err.message })
  }
})

//CALCULATE INSURANCE




module.exports = router;

export { };

