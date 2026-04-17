const announceRepository = require('./announce-repository');

async function createAnnouncement(announcementData) {
  return announceRepository.create(announcementData);
}

async function getAllAnnouncements() {
  return announceRepository.getAllAnnouncements();
}

async function getAnnouncementById(announcementId) {
  return announceRepository.getById(announcementId);
}

async function updateAnnouncement(announcementId, updateData) {
  return announceRepository.updateById(announcementId, updateData);
}

async function deleteAnnouncement(announcementId) {
  return announceRepository.deleteById(announcementId);
}

module.exports = {
  createAnnouncement,
  getAllAnnouncements,
  getAnnouncementById,
  updateAnnouncement,
  deleteAnnouncement,
};