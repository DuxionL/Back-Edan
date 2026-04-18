const express = require('express');
const skpiController = require('./skpi-controller');
const { authMiddleware } = require('../../middlewares');
const upload = require('../../../middlewares/upload');

const route = express.Router();

module.exports = (app) => {
  app.use('/skpi', route);

  route.get('/', authMiddleware, skpiController.getMySkpi);
  route.post('/', authMiddleware, upload.single('certificate_file'), skpiController.createSkpi);
  route.delete('/:id', authMiddleware, skpiController.deleteSkpi);
};