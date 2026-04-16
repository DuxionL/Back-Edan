const gradeService = require('./grades-service');

async function createUTS(req, res) {
  try {
    const { studentId, score } = req.body;

    const result = await gradeService.createUTS(studentId, score);
    res.json(result);

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function getUTSByStudent(req, res) {
  try {
    const result = await gradeService.getUTSByStudent(req.params.studentId);

    if (!result) {
      return res.status(404).json({ message: 'UTS not found' });
    }

    res.json(result);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function updateUTS(req, res) {
  try {
    const { score } = req.body;

    const result = await gradeService.updateUTS(req.params.id, score);

    if (!result) {
      return res.status(404).json({ message: 'UTS not found' });
    }

    res.json(result);

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function deleteUTS(req, res) {
  try {
    const result = await gradeService.deleteUTS(req.params.id);

    if (!result) {
      return res.status(404).json({ message: 'UTS not found' });
    }

    res.json({ message: 'UTS deleted successfully' });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  createUTS,
  getUTSByStudent,
  updateUTS,
  deleteUTS
};