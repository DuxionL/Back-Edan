const express = require('express');

const gradesController = require('./grades-controller');
const { authMiddleware } = require('../../middlewares');

const route = express.Router();

module.exports = (app) => {
  app.use('/grades', route);

  // CREATE (UTS, UAS, TUGAS)
  route.post('/:type', authMiddleware, gradesController.createGrade);

  // GET by student + type
  route.get('/:type/:studentId', authMiddleware, gradesController.getGradeByStudent);

  // UPDATE
  route.put('/:id', authMiddleware, gradesController.updateGrade);

  // DELETE
  route.delete('/:id', authMiddleware, gradesController.deleteGrade);
};