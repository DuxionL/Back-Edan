const express = require('express');
const semesterController = require('./semester-controller');
const { authMiddleware } = require('../../middlewares');

const route = express.Router();

module.exports = (app) => {
  // Prefix untuk semua route di file ini
  app.use('/semesters', route);

  // Endpoint hitung nilai akhir
  route.get('/final/:studentId', authMiddleware, semesterController.getFinalGrade);

  // Route untuk operasional data semester (CRUD)
  route.get('/', authMiddleware, semesterController.getAllSemesters);
  route.get('/:id', authMiddleware, semesterController.getSemesterById);
  route.post('/', authMiddleware, semesterController.createSemester);
  route.put('/:id', authMiddleware, semesterController.updateSemester);
  route.delete('/:id', authMiddleware, semesterController.deleteSemester);
};