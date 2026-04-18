const express = require('express');
const semesterController = require('./semester-controller');
// Ganti path ini sesuai nama file middleware auth kamu (misal: authentication.js)
const auth = require('../../middlewares/authentication'); 
const { authMiddleware } = require('../../middlewares');
const route = express.Router();

module.exports = (app) => {
  app.use('/semesters', route);

  // Endpoint Kalkulasi Nilai
  route.get('/final/:studentId', auth, semesterController.getFinalGrade);

  // Endpoint CRUD Semester
  route.post('/', auth, semesterController.createSemester);
  route.get('/', auth, semesterController.getAllSemesters);
  route.get('/:id', auth, semesterController.getSemesterById);
  route.put('/:id', auth, semesterController.updateSemester);
  route.delete('/:id', auth, semesterController.deleteSemester);
  route.post('/', authMiddleware, semesterController.createSemester);
};