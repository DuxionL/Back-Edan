const skpiService = require('./skpi-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getMySkpi(request, response, next) {
  try {
    const userId = request.user.id;
    const skpis = await skpiService.getSkpiByUser(userId);
    return response.status(200).json(skpis);
  } catch (error) {
    return next(error);
  }
}

async function createSkpi(request, response, next) {
  try {
    const userId = request.user.id;
    
    // DEBUG: Liat di terminal VS Code, apa isinya?
    console.log('--- CEK BODY ---');
    console.log(request.body); 

    const certificate_name = request.body.certificate_name || request.body['certificate_name '];
    const organization = request.body.organization || request.body['organization '];
    const year = request.body.year || request.body['year '];
    const description = request.body.description || '';
    const certificate_file = request.file ? request.file.path : null;

    // Matikan throw sementara, kita pakai status 400 biasa biar kelihatan bedanya
    if (!certificate_name || !organization || !year) {
      return response.status(400).json({ 
        message: 'Data masih dianggap tidak lengkap',
        debug_body: request.body 
      });
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
    const result = await skpiService.deleteSkpi(id);
    if (!result) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'SKPI tidak ditemukan');
    }
    return response.status(200).json({ message: 'SKPI dan file berhasil dihapus' });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getMySkpi,
  createSkpi,
  deleteSkpi,
};