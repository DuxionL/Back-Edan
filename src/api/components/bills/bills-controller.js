const billsService = require('./bills-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function createBill(req, res, next) {
  try {
    const { studentId, semester, amount, type } = req.body;

    if (!studentId || !semester || !amount || !type) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'All fields required');
    }

    const bill = await billsService.createBill({ studentId, semester, amount, type });
    return res.status(201).json(bill);
  } catch (err) {
    return next(err);
  }
}

async function getBills(req, res, next) {
  try {
    const { studentId } = req.params;
    const bills = await billsService.getBills(studentId);
    return res.status(200).json(bills);
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  createBill,
  getBills,
};