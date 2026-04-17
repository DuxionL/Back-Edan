const express = require('express');
const coursesController = require('./courses-controller');
const { authMiddleware } = require('../../middlewares');

const route = express.Router();

module.exports = (app) => {
  app.use('/courses', route);

  // GET /api/courses
  route.get('/', authMiddleware, coursesController.getCourses);

  // POST /api/courses
  route.post('/', authMiddleware, coursesController.createCourse);

  // GET /api/courses/:id
  route.get('/:id', authMiddleware, coursesController.getCourse);

  // PUT /api/courses/:id
  route.put('/:id', authMiddleware, coursesController.updateCourse);

  // DELETE /api/courses/:id
  route.delete('/:id', authMiddleware, coursesController.deleteCourse);
};