const mongoose = require('mongoose');
const Schedules = mongoose.model('Schedules');

async function createSchedule(data) {
  return Schedules.create(data);
}

async function getSchedulesByStudent(studentId) {
  return Schedules.find({ studentId }).populate('courseId');
}

async function getScheduleById(id) {
  return Schedules.findById(id);
}

async function updateSchedule(id, data) {
  return Schedules.updateOne({ _id: id }, { $set: data });
}

async function deleteSchedule(id) {
  return Schedules.deleteOne({ _id: id });
}

module.exports = {
  createSchedule,
  getSchedulesByStudent,
  getScheduleById,
  updateSchedule,
  deleteSchedule,
};