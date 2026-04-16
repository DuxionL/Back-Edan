const gradeRepo = require('./grades-repository');

function validateScore(score) {
  if (score < 0 || score > 100) {
    throw new Error('Score must be between 0 and 100');
  }
}

async function createUTS(studentId, score) {
  validateScore(score);

  return gradeRepo.create({
    studentId,
    type: 'UTS',
    score
  });
}

async function updateUTS(id, score) {
  validateScore(score);

  return gradeRepo.updateById(id, { score });
}

async function getUTSByStudent(studentId) {
  return gradeRepo.getByStudentAndType(studentId, 'UTS');
}

async function deleteUTS(id) {
  return gradeRepo.deleteById(id);
}

module.exports = {
  createUTS,
  getUTSByStudent,
  updateUTS,
  deleteUTS
};