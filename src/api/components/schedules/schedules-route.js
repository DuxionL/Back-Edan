const express = require('express');
const schedulesController = require('./schedules-controller');
const { authMiddleware } = require('../../middlewares');

const route = express.Router();

module.exports = (app) => {
  app.use('/schedules', route);

  route.post('/', authMiddleware, schedulesController.createSchedule);
  route.get('/:studentId', authMiddleware, schedulesController.getSchedules);
  route.put('/:id', authMiddleware, schedulesController.updateSchedule);
  route.delete('/:id', authMiddleware, schedulesController.deleteSchedule);
};