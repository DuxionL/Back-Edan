const skpiService = require('./skpi-service');
const { errorResponder, errorTypes } = require('../../../core/errors');
const fs = require('fs');

async function getMySkpi(request, response, next) {
  try {
    const studentId = request.user.student_id || request.user.id;
    const skpis = await skpiService.getSkpiByStudent(studentId);
    return response.status(200).json(skpis);
  } catch (error) {
    return next(error);
  }
}

async function createSkpi(request, response, next) {
  try {
    const studentId = request.user.student_id || request.user.id;
    const { certificate_name, organization, year, description } = request.body;
    const certificate_file = request.file ? request.file.path : null;

    if (!certificate_name || !organization || !year) {
      if (certificate_file && fs.existsSync(certificate_file)) {
        fs.unlinkSync(certificate_file);
      }
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Data tidak lengkap');
    }

    await skpiService.createSkpi({
      student_id: studentId,
      certificate_name,
      organization,
      year,
      description,
      certificate_file,
    });

    return response.status(200).json({ message: 'SKPI berhasil ditambahkan' });
  } catch (error) {
    if (request.file && fs.existsSync(request.file.path)) {
      fs.unlinkSync(request.file.path);
    }
    return next(error);
  }
}

async function deleteSkpi(request, response, next) {
  try {
    const id = request.params.id;
    const result = await skpiService.deleteSkpi(id);
    if (!result) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'SKPI tidak ditemukan');
    }
    return response.status(200).json({ message: 'SKPI berhasil dihapus' });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getMySkpi,
  createSkpi,
  deleteSkpi,
};