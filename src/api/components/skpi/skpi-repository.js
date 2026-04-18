const mongoose = require('mongoose');
const SKPI = mongoose.model('SKPI');

async function getSkpiByUser(userId) {
  return SKPI.find({ user_id: userId });
}

async function createSkpi(data) {
  return SKPI.create(data);
}

async function deleteSkpi(id) {
  return SKPI.deleteOne({ _id: id });
}

async function getSkpiById(id) {
  return SKPI.findById(id);
}

module.exports = {
  getSkpiByUser,
  createSkpi,
  deleteSkpi,
  getSkpiById,
};