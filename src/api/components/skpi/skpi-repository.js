const { SKPI } = require('../../../models/skpi-schema')();

async function getSkpiByUser(userId) {
  return SKPI.find({ user_id: userId });
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
  getSkpiByUser,
  createSkpi,
  getSkpiById,
  deleteSkpi,
};