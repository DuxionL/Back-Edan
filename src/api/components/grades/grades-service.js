const gradeRepo = require('./grades-repository');

function validateScore(score) {
  if (score < 0 || score > 100) {
    throw new Error('Score must be between 0 and 100');
  }
}

function validateType(type) {
  const validTypes = ['UTS', 'UAS', 'TUGAS'];
  if (!validTypes.includes(type)) {
    throw new Error('Invalid grade type');
  }
}

async function createGrade(studentId, score, type) {
  validateScore(score);
  validateType(type);

  return gradeRepo.create({
    studentId,
    type,
    score
  });
}

async function getGradeByStudent(studentId, type) {
  validateType(type);
  return gradeRepo.getByStudentAndType(studentId, type);
}

async function updateGrade(id, score) {
  validateScore(score);
  return gradeRepo.updateById(id, { score });
}

async function deleteGrade(id) {
  return gradeRepo.deleteById(id);
}

module.exports = {
  createGrade,
  getGradeByStudent,
  updateGrade,
  deleteGrade
};