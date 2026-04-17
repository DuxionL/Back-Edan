const paymentsRepository = require('./payments-repository');
const billsRepository = require('../bills/bills-repository');
const studentsRepository = require('../students/students-repository');

async function createPayment(data) {
  const { studentId, billId } = data;

  const student = await studentsRepository.getByStudentId(studentId);
  if (!student) throw new Error('Student not found');

  const bill = await billsRepository.getById(billId);
  if (!bill) throw new Error('Bill not found');

  if (bill.studentId !== studentId) {
    throw new Error('This bill does not belong to the student');
  }

  if (bill.status === 'PAID') {
  throw new Error('Bill already paid');
  }
  
  await billsRepository.update(billId, { status: 'PAID' });

  return paymentsRepository.create(data);
}

async function getPayments(studentId) {
  return paymentsRepository.getByStudentId(studentId);
}

module.exports = {
  createPayment,
  getPayments,
};