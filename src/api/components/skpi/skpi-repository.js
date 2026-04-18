const { SKPI } = require('../../../models/skpi-schema')();

async function getSkpiByStudent(studentId) {
  return SKPI.find({ student_id: studentId });
}

async function createSkpi(data) {
  return SKPI.create(data);
}

async function getSkpiById(id) {
  return SKPI.findById(id);
}

async function deleteSkpi(id) {
  return SKPI.deleteOne({ _id: id });
}

module.exports = {
  getSkpiByStudent,
  createSkpi,
  getSkpiById,
  deleteSkpi,
};