const semesterRepo = require('./semester-repository');

// Fungsi buat simpan semester
async function createSemester(semesterData) {
  return semesterRepo.create(semesterData);
}

// Ambil semua data semester
async function getAllSemesters() {
  return semesterRepo.getAllSemesters();
}   

// Cari semester dari ID-nya
async function getSemesterById(id) {
  return semesterRepo.getById(id);
}

// Update data
async function updateSemester(id, updateData) {
  return semesterRepo.updateById(id, updateData);
}

// Hapus data
async function deleteSemester(id) {
  return semesterRepo.deleteById(id);
}

// Logic buat hitung nilai akhir mahasiswa
async function calculateFinalGrade(studentId) {
  const allGrades = await semesterRepo.getAllByStudentId(studentId); 

  if (!allGrades || allGrades.length === 0) {
    throw new Error('Mahasiswa ini belum punya nilai sama sekali');
  }

  // Kelompokkan nilai berdasarkan tipenya
  const gradesByType = { TUGAS: [], UTS: [], UAS: [] };
  allGrades.forEach(g => {
    if (gradesByType[g.type]) {
      gradesByType[g.type].push(g.score);
    }
  });

  // Fungsi pembantu buat nyari rata-rata
  const hitungRata2 = (arr) => arr.length > 0 ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;

  const avgTugas = hitungRata2(gradesByType.TUGAS);
  const avgUts = hitungRata2(gradesByType.UTS);
  const avgUas = hitungRata2(gradesByType.UAS);

  // Kalkulasi bobot: Tugas 40%, UTS 30%, UAS 30%
  const finalScore = (avgTugas * 0.4) + (avgUts * 0.3) + (avgUas * 0.3);

  return {
    studentId,
    rincian: { 
      tugas: avgTugas, 
      uts: avgUts, 
      uas: avgUas 
    },
    nilaiAkhir: Number(finalScore.toFixed(2))
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