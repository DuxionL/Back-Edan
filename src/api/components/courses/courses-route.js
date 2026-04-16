const express = require('express');

const coursesController = require('./courses-controller');
const { authMiddleware } = require('../../middlewares');

const route = express.Router();

module.exports = (app) => {
  app.use('/courses', route);

  // GET /courses -> Ambil daftar semua mata kuliah
  route.get('/',authMiddleware,  coursesController.getCourses);

  // POST /courses -> Tambah mata kuliah baru
  route.post('/', authMiddleware, coursesController.createCourse);

  // GET /courses/:id -> Ambil detail mata kuliah tertentu
  route.get('/:id', authMiddleware, coursesController.getCourse);

  // PUT /courses/:id -> Update informasi mata kuliah
  route.put('/:id', authMiddleware, coursesController.updateCourse);

  // DELETE /courses/:id -> Hapus mata kuliah
  route.delete('/:id', authMiddleware, coursesController.deleteCourse);
};