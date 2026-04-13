const studentsRepository = require('./students-repository');

async function createStudent(studentData) {
  return studentsRepository.create(studentData);
}

async function getAllStudents() {
  return studentsRepository.getAllStudents();
}

async function getStudentByStudentId(studentId) {
  return studentsRepository.getByStudentId(studentId);
}

async function updateStudent(studentId, updateData) {
  return studentsRepository.updateByStudentId(studentId, updateData);
}

async function deleteStudent(studentId) {
  return studentsRepository.deleteByStudentId(studentId);
}

module.exports = {
  createStudent,
  getStudentByStudentId,
  updateStudent,
  deleteStudent,
};