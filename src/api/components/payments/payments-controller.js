const paymentsService = require('./payments-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function createPayment(req, res, next) {
  try {
    const { studentId, billId, amount, method } = req.body;

    if (!studentId || !billId || !amount || !method) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'All fields required');
    }

    const payment = await paymentsService.createPayment({
      studentId,
      billId,
      amount,
      method,
    });

    return res.status(201).json(payment);
  } catch (err) {
    return next(err);
  }
}

async function getPayments(req, res, next) {
  try {
    const { studentId } = req.params;
    const payments = await paymentsService.getPayments(studentId);
    return res.status(200).json(payments);
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  createPayment,
  getPayments,
};