const express = require('express');
const authentication = require('../../middlewares/authentication');
const upload = require('../../middlewares/upload');
const skpiController = require('./skpi-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/skpi', route);

  route.post(
    '/',
    authentication,
    upload.single('certificate_file'),
    skpiController.createSkpi
  );

  route.get('/', authentication, skpiController.getMySkpi);

  route.delete('/:id', authentication, skpiController.deleteSkpi);
};