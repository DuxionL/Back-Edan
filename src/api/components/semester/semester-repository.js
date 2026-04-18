const { Semester, Grades } = require('../../../models');

// Fungsi buat simpan semester baru
async function create(semesterData) {
  return Semester.create(semesterData);
}

// Ambil semua list semester dari database
async function getAllSemesters() {
  return Semester.find({});
}

// Cari data semester lewat ID-nya
async function getById(id) {
  return Semester.findById(id);
}

// Cari spesifik berdasarkan tahun sama term (semester)
async function getByYearAndTerm(year, term) {
  return Semester.findOne({ year, term });
}

// Update data semester berdasarkan ID
async function updateById(id, updateData) {
  return Semester.findByIdAndUpdate(id, updateData, { new: true });
}

// Hapus data semester
async function deleteById(id) {
  return Semester.findByIdAndDelete(id);
}

// Ambil semua nilai berdasarkan ID mahasiswa
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