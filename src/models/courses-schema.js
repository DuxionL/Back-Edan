const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true, unique: true },
  sks: { type: Number, required: true },
  description: { type: String },
  lecturer: {
    name: String,
    nip: String,
    email: String,
  },
  teams_code: String,
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

module.exports = () => {
  const Courses = mongoose.models.Courses || mongoose.model('Courses', courseSchema);
  return { Courses };
};