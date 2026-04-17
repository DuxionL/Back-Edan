const coursesRepository = require('./courses-repository');

async function getCourses() {
  const courses = await coursesRepository.getCourses();
  return courses.map((course) => ({
    id: course._id,
    name: course.name,
    code: course.code,
    sks: course.sks,
    description: course.description || '',
  }));
}

async function getCourse(id) {
  const course = await coursesRepository.getCourse(id);
  if (!course) return null;

  return {
    id: course._id,
    name: course.name,
    code: course.code,
    sks: course.sks,
    description: course.description,
    lecturer: course.lecturer,
    teams_code: course.teams_code,
  };
}

async function createCourse(data) {
  return coursesRepository.createCourse(data);
}

async function updateCourse(id, data) {
  const course = await coursesRepository.getCourse(id);
  if (!course) return null;
  return coursesRepository.updateCourse(id, data);
}

async function deleteCourse(id) {
  const course = await coursesRepository.getCourse(id);
  if (!course) return null;
  return coursesRepository.deleteCourse(id);
}

module.exports = {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
};