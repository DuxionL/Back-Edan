const billsRepository = require('./bills-repository');
const studentsRepository = require('../students/students-repository');

async function createBill(data) {
  const student = await studentsRepository.getByStudentId(data.studentId);

  if (!student) {
    throw new Error('Student not found');
  }

  return billsRepository.create(data);
}

async function getBills(studentId) {
  return billsRepository.getByStudentId(studentId);
}

module.exports = {
  createBill,
  getBills,
};