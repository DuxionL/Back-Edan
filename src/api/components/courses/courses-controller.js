const coursesService = require('./courses-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getCourses(request, response, next) {
  try {
    const courses = await coursesService.getCourses();
    return response.status(200).json(courses);
  } catch (error) {
    return next(error);
  }
}

async function getCourse(request, response, next) {
  try {
    const course = await coursesService.getCourse(request.params.id);
    if (!course) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'Unknown course');
    }
    return response.status(200).json(course);
  } catch (error) {
    return next(error);
  }
}

async function createCourse(request, response, next) {
  try {
    const { name, code, sks, description, lecturer, teams_code } = request.body;
    
    if (!name || !code || !sks) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Name, code, and sks are required');
    }

    await coursesService.createCourse({
      name, code, sks, description, lecturer, teams_code
    });

    return response.status(200).json({ message: 'Course created successfully' });
  } catch (error) {
    return next(error);
  }
}

async function updateCourse(request, response, next) {
  try {
    const id = request.params.id;
    const success = await coursesService.updateCourse(id, request.body);
    
    if (!success) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'Failed to update course');
    }

    return response.status(200).json({ message: 'Course updated successfully' });
  } catch (error) {
    return next(error);
  }
}

async function deleteCourse(request, response, next) {
  try {
    const id = request.params.id;
    const success = await coursesService.deleteCourse(id);
    if (!success) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'Failed to delete course');
    }
    return response.status(200).json({ message: 'Course deleted successfully' });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
};