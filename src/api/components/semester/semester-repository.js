// Pastikan nama model sesuai dengan yang ada di folder models (biasanya tanpa 's')
const { Semester, Grades } = require('../../../models');

/**
 * Create a new semester
 * @param {object} semesterData 
 * @returns {Promise}
 */
async function create(semesterData) {
  // Menggunakan Semester (singular) sesuai definisi model Mongoose
  return Semester.create(semesterData);
}

/**
 * Get all semesters
 * @returns {Promise}
 */
async function getAllSemesters() {
  return Semester.find({});
}

/**
 * Get semester by ID
 * @param {string} id 
 * @returns {Promise}
 */
async function getById(id) {
  return Semester.findById(id);
}

/**
 * Find semester by year and term
 * @param {string} year 
 * @param {string} term 
 * @returns {Promise}
 */
async function getByYearAndTerm(year, term) {
  return Semester.findOne({ year, term });
}

/**
 * Update semester
 * @param {string} id 
 * @param {object} updateData 
 * @returns {Promise}
 */
async function updateById(id, updateData) {
  return Semester.findByIdAndUpdate(id, updateData, { new: true });
}

/**
 * Delete semester
 * @param {string} id 
 * @returns {Promise}
 */
async function deleteById(id) {
  return Semester.findByIdAndDelete(id);
}

/**
 * Get grades by student ID
 * @param {string} studentId 
 * @returns {Promise}
 */
async function getAllByStudentId(studentId) {
  return Grades.find({ studentId });
}

module.exports = {
  create,
  getAllSemesters,
  getById,
  updateById,
  deleteById,
  getByYearAndTerm,
  getAllByStudentId
};