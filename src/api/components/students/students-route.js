const express = require('express');

const studentsController = require('./students-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/students', route);

  // bikin student baru
  route.post('/', studentsController.createStudent);

  // lihat semua student
  route.get('/', studentsController.getAllStudents);

  // cari student pake studentId
  route.get('/:studentId', studentsController.getStudentById);

  // update data student pake studentId
  route.put('/:studentId', studentsController.updateStudent);

  // apus student
  route.delete('/:studentId', studentsController.deleteStudent);
};