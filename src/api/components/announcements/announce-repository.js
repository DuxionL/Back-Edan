const { Announcements } = require('../../../models');

async function create(announcementData) {
  return Announcements.create(announcementData);
}

async function getAllAnnouncements() {
  return Announcements.find({}).sort({ postedAt: -1 });
}

async function getById(announcementId) {
  return Announcements.findById(announcementId);
}

async function updateById(announcementId, updateData) {
  return Announcements.findByIdAndUpdate(announcementId, updateData, { new: true });
}

async function deleteById(announcementId) {
  return Announcements.findByIdAndDelete(announcementId);
}

module.exports = {
  create,
  getAllAnnouncements,
  getById,
  updateById,
  deleteById,
};