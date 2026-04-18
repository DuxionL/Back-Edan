const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  studentId: { type: Number, ref: 'Students', required: true },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Courses', required: true },

  room: { type: String, required: true },
  day: { type: String, required: true },
  time: { type: String, required: true },
}, {
  timestamps: true,
});

module.exports = () => {
  const Schedules = mongoose.models.Schedules || mongoose.model('Schedules', scheduleSchema);
  return { Schedules };
};