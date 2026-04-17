const { Payments } = require('../../../models');

async function create(data) {
  return Payments.create(data);
}

async function getByStudentId(studentId) {
  return Payments.find({ studentId }).populate('billId');
}

module.exports = {
  create,
  getByStudentId,
};