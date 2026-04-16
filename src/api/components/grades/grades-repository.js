const { Grades } = require('../../../models');

async function create(gradeData) {
  return Grades.create(gradeData);
}

async function getByStudentAndType(studentId, type) {
  return Grades.findOne({ studentId, type });
}

async function updateById(id, updateData) {
  return Grades.findByIdAndUpdate(id, updateData, { new: true });
}

async function deleteById(id) {
  return Grades.findByIdAndDelete(id);
}

module.exports = {
  create,
  getByStudentAndType,
  updateById,
  deleteById,
};