const express = require('express');
const billsController = require('./bills-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/bills', route);

  route.post('/', billsController.createBill);
  route.get('/:studentId', billsController.getBills);
};