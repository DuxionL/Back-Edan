const semesterService = require('./semester-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

// Buat data semester baru
async function createSemester(req, res, next) {
  try {
    const data = await semesterService.createSemester(req.body);
    return res.status(201).json({
      message: 'Berhasil buat data semester',
      data
    });
  } catch (err) {
    next(err);
  }
}

// Ambil semua daftar semester
async function getAllSemesters(req, res, next) {
  try {
    const semesters = await semesterService.getAllSemesters();
    return res.status(200).json(semesters);
  } catch (err) {
    next(err);
  }
}

// Cari semester berdasarkan ID
async function getSemesterById(req, res, next) {
  try {
    const { id } = req.params;
    const semester = await semesterService.getSemesterById(id);
    
    if (!semester) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'Data semester nggak ketemu');
    }
    
    return res.status(200).json(semester);
  } catch (err) {
    next(err);
  }
}

// Update data semester
async function updateSemester(req, res, next) {
  try {
    const updated = await semesterService.updateSemester(req.params.id, req.body);
    return res.status(200).json({
      message: 'Update semester aman',
      data: updated
    });
  } catch (err) {
    next(err);
  }
}

// Hapus semester
async function deleteSemester(req, res, next) {
  try {
    await semesterService.deleteSemester(req.params.id);
    return res.status(200).json({ 
      message: 'Data semester sudah dihapus' 
    });
  } catch (err) {
    next(err);
  }
}

// Hitung nilai akhir mahasiswa
async function getFinalGrade(req, res, next) {
  try {
    const { studentId } = req.params;
    const finalGrade = await semesterService.calculateFinalGrade(studentId);
    return res.status(200).json(finalGrade);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  createSemester,
  getSemesterById,
  updateSemester,
  deleteSemester,
  getAllSemesters,
  getFinalGrade,
};