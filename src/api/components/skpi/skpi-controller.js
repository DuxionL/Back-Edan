const skpiService = require('./skpi-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getMySkpi(request, response, next) {
  try {
    const userId = request.user.id;
    const skpi = await skpiService.getSkpiByUser(userId);
    return response.status(200).json(skpi);
  } catch (error) {
    return next(error);
  }
}

async function createSkpi(request, response, next) {
  try {
    const userId = request.user.id;
    const { certificate_name, organization, year, description } = request.body;
    const certificate_file = request.file ? request.file.path : null;

    if (!certificate_name || !organization || !year) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Data tidak lengkap');
    }

    await skpiService.createSkpi({
      user_id: userId,
      certificate_name,
      organization,
      year,
      description,
      certificate_file,
    });

    return response.status(200).json({ message: 'SKPI berhasil ditambahkan' });
  } catch (error) {
    return next(error);
  }
}

async function deleteSkpi(request, response, next) {
  try {
    const id = request.params.id;
    await skpiService.deleteSkpi(id);
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