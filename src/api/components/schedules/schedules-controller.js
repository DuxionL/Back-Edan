const schedulesService = require('./schedules-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function createSchedule(req, res, next) {
  try {
    const { studentId, courseId, room, day, time } = req.body;

    if (!studentId || !courseId) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'studentId and courseId required');
    }

    await schedulesService.createSchedule({ studentId, courseId, room, day, time });

    return res.status(200).json({ message: 'Schedule created successfully' });
  } catch (err) {
    return next(err);
  }
}

async function getSchedules(req, res, next) {
  try {
    const studentId = req.params.studentId;
    const schedules = await schedulesService.getSchedules(studentId);

    return res.status(200).json(schedules);
  } catch (err) {
    return next(err);
  }
}

async function updateSchedule(req, res, next) {
  try {
    const id = req.params.id;
    const success = await schedulesService.updateSchedule(id, req.body);

    if (!success) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'Failed to update schedule');
    }

    return res.status(200).json({ message: 'Schedule updated successfully' });
  } catch (err) {
    return next(err);
  }
}

async function deleteSchedule(req, res, next) {
  try {
    const id = req.params.id;
    const success = await schedulesService.deleteSchedule(id);

    if (!success) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'Failed to delete schedule');
    }

    return res.status(200).json({ message: 'Schedule deleted successfully' });
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  createSchedule,
  getSchedules,
  updateSchedule,
  deleteSchedule,
};