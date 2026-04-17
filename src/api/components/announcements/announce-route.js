const express = require('express');
const announceController = require('./announce-controller');
const { authMiddleware } = require('../../middlewares');

const route = express.Router();

module.exports = (app) => {
  app.use('/announcements', route);

  route.post('/', authMiddleware, announceController.createAnnouncement);
  route.get('/', authMiddleware, announceController.getAllAnnouncements);
  route.get('/:announcementId', authMiddleware, announceController.getAnnouncementById);
  route.put('/:announcementId', authMiddleware, announceController.updateAnnouncement);
  route.delete('/:announcementId', announceController.deleteAnnouncement);
};