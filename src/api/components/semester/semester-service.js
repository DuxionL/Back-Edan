const semesterRepo = require('./semester-repository');
const gradeRepo = require('../grades/grades-repository'); // Pastikan path folder grades benar

async function createSemester(semesterData) {
  return semesterRepo.create(semesterData);
}

async function getAllSemesters() {
  return semesterRepo.getAllSemesters();
}

async function getSemesterById(id) {
  return semesterRepo.getById(id);
}

async function updateSemester(id, updateData) {
  return semesterRepo.updateById(id, updateData);
}

async function deleteSemester(id) {
  return semesterRepo.deleteById(id);
}

async function calculateFinalGrade(studentId) {
  // Pastikan fungsi ini ada di grades-repository atau semester-repository
  const allGrades = await semesterRepo.getAllByStudentId(studentId); 

  if (!allGrades || allGrades.length === 0) {
    throw new Error('No grades found for this student');
  }

  const gradesByType = { TUGAS: [], UTS: [], UAS: [] };
  allGrades.forEach(g => {
    if (gradesByType[g.type]) gradesByType[g.type].push(g.score);
  });

  const getAverage = (arr) => arr.length > 0 ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;

  const avgTugas = getAverage(gradesByType.TUGAS);
  const avgUts = getAverage(gradesByType.UTS);
  const avgUas = getAverage(gradesByType.UAS);

  const finalScore = (avgTugas * 0.4) + (avgUts * 0.3) + (avgUas * 0.3);

  return {
    studentId,
    details: { tugas: avgTugas, uts: avgUts, uas: avgUas },
    finalScore: Number(finalScore.toFixed(2))
  };
}

module.exports = {
  createSemester,
  getAllSemesters,
  getSemesterById,
  updateSemester,
  deleteSemester,
  calculateFinalGrade
};