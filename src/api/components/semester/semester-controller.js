const semesterService = require('./semester-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function createSemester(req, res, next) {
  try {
    const result = await semesterService.createSemester(req.body);
    return res.status(201).json({
      message: 'Semester created successfully',
      data: result
    });
  } catch (err) {
    return next(err);
  }
}

async function getAllSemesters(req, res, next) {
  try {
    const result = await semesterService.getAllSemesters();
    return res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
}

async function getSemesterById(req, res, next) {
  try {
    const result = await semesterService.getSemesterById(req.params.id);
    if (!result) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'Semester not found');
    }
    return res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
}

async function updateSemester(req, res, next) {
  try {
    const result = await semesterService.updateSemester(req.params.id, req.body);
    return res.status(200).json({
      message: 'Semester updated successfully',
      data: result
    });
  } catch (err) {
    return next(err);
  }
}

async function deleteSemester(req, res, next) {
  try {
    await semesterService.deleteSemester(req.params.id);
    return res.status(200).json({ message: 'Semester deleted successfully' });
  } catch (err) {
    return next(err);
  }
}

async function getFinalGrade(req, res, next) {
  try {
    const { studentId } = req.params;
    const result = await semesterService.calculateFinalGrade(studentId);
    return res.status(200).json(result);
  } catch (err) {
    return next(err);
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