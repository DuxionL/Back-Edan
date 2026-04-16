const express = require('express');

const gradesController = require('./grades-controller');
const { authMiddleware } = require('../../middlewares');

const route = express.Router();

module.exports = (app) => {
  app.use('/grades', route);

  // POST /grades/uts
  route.post('/uts', authMiddleware, gradesController.createUTS);

  // GET /grades/uts/:studentId
  route.get('/uts/:studentId', authMiddleware, gradesController.getUTSByStudent);

  // PUT /grades/uts/:id
  route.put('/uts/:id', authMiddleware, gradesController.updateUTS);

  // DELETE /grades/uts/:id
  route.delete('/uts/:id', authMiddleware, gradesController.deleteUTS);
};