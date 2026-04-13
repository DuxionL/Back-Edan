const studentsService = require('./students-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

//sesuai nama, generate studentID
async function generateUniqueStudentId() {
  const { Students } = require('../../../models');
  
  // cari studentId tertinggi sebelumnya, inc +
  const lastStudent = await Students.findOne({}, { studentId: 1 }).sort({ studentId: -1 });
  const nextId = lastStudent ? lastStudent.studentId + 1 : 100000000; // Start dari 100000000 kalo gkad student (dipake sekali lmao)
  
  //mastiin 9 digit (buat kek NIM)
  if (nextId > 999999999) {
    throw new Error('Maximum studentId reached');
  }
  
  return nextId;
}

async function createStudent(request, response, next) {
  try {
    const { name, address, phoneNumber } = request.body;
    if (!name) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Name is required');
    }
    const studentId = await generateUniqueStudentId();
    const student = await studentsService.createStudent({ studentId, name, address, phoneNumber });

    return response.status(201).json(student);
  } catch (error) {
    return next(error);
}
}
async function getAllStudents(request, response, next) {
  try {
    const students = await studentsService.getAllStudents();
    return response.status(200).json(students);
  } catch (error) {
    return next(error);
  }
}

async function getStudentById(request, response, next) {
  try {
    const { studentId } = request.params;
    const student = await studentsService.getStudentByStudentId(studentId);
    if (!student) {
      throw errorResponder(errorTypes.NOT_FOUND, 'Student does not exist');
    }
    return response.status(200).json(student);
  } catch (error) {
    return next(error);
  }
}
async function updateStudent(request, response, next) {
  try {
    const { studentId } = request.params;
    const { address, phoneNumber } = request.body;
    const student = await studentsService.updateStudent(studentId, { address, phoneNumber });
    if (!student) {
      throw errorResponder(errorTypes.NOT_FOUND, 'Student not found');
    }
    return response.status(200).json(student);
  } catch (error) {
    return next(error);
  }
}
async function deleteStudent(request, response, next) {
  try {
    const { studentId } = request.params;
    const student = await studentsService.deleteStudent(studentId);
    if (!student) {
      throw errorResponder(errorTypes.NOT_FOUND, 'Student not found');
    }
    return response.status(200).json({ message: 'Student deleted successfully' });
  } catch (error) {
    return next(error);
  }
}
module.exports = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};