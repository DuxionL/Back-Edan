const express = require('express');

const studentsController = require('./students-controller');
const { authMiddleware } = require('../../middlewares');

const route = express.Router();

module.exports = (app) => {
  app.use('/students', route);

  // bikin student baru (hanya authorized accounts)
  route.post('/', authMiddleware, studentsController.createStudent);

  // lihat semua student
  route.get('/', studentsController.getAllStudents);

  // cari student pake studentId
  route.get('/:studentId', studentsController.getStudentById);

  // update data student pake studentId
  route.put('/:studentId', studentsController.updateStudent);

  // apus student (hanya authorized accounts)
  route.delete('/:studentId', authMiddleware, studentsController.deleteStudent);
};