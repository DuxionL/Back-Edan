// src/models/semester-schema.js
module.exports = (mongoose) => {
  const semesterSchema = new mongoose.Schema(
    {
      year: {
        type: String,
        required: true,
      },
      term: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

  // Ini penting: Nama 'Semester' harus sesuai dengan yang dipanggil di repository
  return mongoose.model('Semester', semesterSchema);
};