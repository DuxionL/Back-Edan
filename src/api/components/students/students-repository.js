const { Students } = require('../../../models');

async function create(studentData) {
  return Students.create(studentData);
}

async function getAllStudents() {
  return Students.find({});
}

async function getByStudentId(studentId) {
  return Students.findOne({ studentId });
}

async function updateByStudentId(studentId, updateData) {
  return Students.findOneAndUpdate({ studentId }, updateData, { new: true });
}

async function deleteByStudentId(studentId) {
  return Students.findOneAndDelete({ studentId });
}

module.exports = {
  create,
  getAllStudents,
  getByStudentId,
  updateByStudentId,
  deleteByStudentId,
};