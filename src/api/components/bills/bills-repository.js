const { Bills } = require('../../../models');

async function create(data) {
  return Bills.create(data);
}

async function getByStudentId(studentId) {
  return Bills.find({ studentId });
}

async function getById(id) {
  return Bills.findById(id);
}

async function update(id, data) {
  return Bills.findByIdAndUpdate(id, data, { new: true });
}

module.exports = {
  create,
  getByStudentId,
  getById,
  update,
};