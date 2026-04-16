const announceService = require('./announce-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function createAnnouncement(request, response, next) {
  try {
    const { title, contents } = request.body;
    if (!title || !contents) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Title and contents are required');
    }

    const announcement = await announceService.createAnnouncement({
      title,
      contents,
      postedAt: new Date(),
    });

    return response.status(201).json(announcement);
  } catch (error) {
    return next(error);
  }
}

async function getAllAnnouncements(request, response, next) {
  try {
    const announcements = await announceService.getAllAnnouncements();
    return response.status(200).json(announcements);
  } catch (error) {
    return next(error);
  }
}

async function getAnnouncementById(request, response, next) {
  try {
    const { announcementId } = request.params;
    const announcement = await announceService.getAnnouncementById(announcementId);
    if (!announcement) {
      throw errorResponder(errorTypes.NOT_FOUND, 'Announcement not found');
    }
    return response.status(200).json(announcement);
  } catch (error) {
    return next(error);
  }
}

async function updateAnnouncement(request, response, next) {
  try {
    const { announcementId } = request.params;
    const { title, contents } = request.body;

    if (!title && !contents) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Title or contents must be provided');
    }

    const announcement = await announceService.updateAnnouncement(announcementId, {
      ...(title && { title }),
      ...(contents && { contents }),
    });

    if (!announcement) {
      throw errorResponder(errorTypes.NOT_FOUND, 'Announcement not found');
    }
    return response.status(200).json(announcement);
  } catch (error) {
    return next(error);
  }
}

async function deleteAnnouncement(request, response, next) {
  try {
    const { announcementId } = request.params;
    const announcement = await announceService.deleteAnnouncement(announcementId);
    if (!announcement) {
      throw errorResponder(errorTypes.NOT_FOUND, 'Announcement not found');
    }
    return response.status(200).json({ message: 'Announcement deleted successfully' });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  createAnnouncement,
  getAllAnnouncements,
  getAnnouncementById,
  updateAnnouncement,
  deleteAnnouncement,
};