const skpiRepository = require('./skpi-repository');
const fs = require('fs');
const path = require('path');

async function getSkpiByUser(userId) {
  const skpis = await skpiRepository.getSkpiByUser(userId);
  return skpis.map((s) => ({
    id: s._id,
    certificate_name: s.certificate_name,
    organization: s.organization,
    year: s.year,
    description: s.description,
    certificate_file: s.certificate_file,
  }));
}

async function createSkpi(data) {
  return skpiRepository.createSkpi(data);
}

async function deleteSkpi(id) {
  const skpi = await skpiRepository.getSkpiById(id);
  
  if (!skpi) {
    return null;
  }

  if (skpi.certificate_file) {
    const filePath = path.join(process.cwd(), skpi.certificate_file);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }

  return skpiRepository.deleteSkpi(id);
}

module.exports = {
  getSkpiByUser,
  createSkpi,
  deleteSkpi,
};