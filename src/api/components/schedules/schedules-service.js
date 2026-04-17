const schedulesRepository = require('./schedules-repository');
const mongoose = require('mongoose');

async function createSchedule(data) {
  return schedulesRepository.createSchedule(data);
}

async function getSchedules(studentId) {
  const schedules = await schedulesRepository.getSchedulesByStudent(studentId);

  return schedules.map((s) => ({
    id: s._id,
    studentId: s.studentId,
    course: s.courseId ? {
      id: s.courseId._id,
      name: s.courseId.name,
      code: s.courseId.code,
    } : null,
    room: s.room,
    day: s.day,
    time: s.time,
  }));
}

async function updateSchedule(id, data) {
  const schedule = await schedulesRepository.getScheduleById(id);
  if (!schedule) return null;

  return schedulesRepository.updateSchedule(id, data);
}

async function deleteSchedule(id) {
  const schedule = await schedulesRepository.getScheduleById(id);
  if (!schedule) return null;

  return schedulesRepository.deleteSchedule(id);
}

module.exports = {
  createSchedule,
  getSchedules,
  updateSchedule,
  deleteSchedule,
};