const mongoose = require('mongoose');
const Courses = mongoose.model('Courses');

async function getCourses() {
  return Courses.find({});
}

async function getCourse(id) {
  return Courses.findById(id);
}

async function createCourse(data) {
  return Courses.create(data);
}

async function updateCourse(id, data) {
  return Courses.updateOne({ _id: id }, { $set: data });
}

async function deleteCourse(id) {
  return Courses.deleteOne({ _id: id });
}

module.exports = {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
};