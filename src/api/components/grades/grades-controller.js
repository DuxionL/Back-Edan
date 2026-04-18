const gradeService = require('./grades-service');

async function createGrade(req, res) {
  try {
    const { studentId, score } = req.body;
    const { type } = req.params;

    const result = await gradeService.createGrade(
      studentId,
      score,
      type.toUpperCase()
    );

    res.json(result);

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function getGradeByStudent(req, res) {
  try {
    const { studentId, type } = req.params;

    const result = await gradeService.getGradeByStudent(
      studentId,
      type.toUpperCase()
    );

    if (!result) {
      return res.status(404).json({ message: 'Grade not found' });
    }

    res.json(result);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function updateGrade(req, res) {
  try {
    const { score } = req.body;

    const result = await gradeService.updateGrade(
      req.params.id,
      score
    );

    if (!result) {
      return res.status(404).json({ message: 'Grade not found' });
    }

    res.json(result);

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function deleteGrade(req, res) {
  try {
    const result = await gradeService.deleteGrade(req.params.id);

    if (!result) {
      return res.status(404).json({ message: 'Grade not found' });
    }

    res.json({ message: 'Grade deleted successfully' });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  createGrade,
  getGradeByStudent,
  updateGrade,
  deleteGrade
};