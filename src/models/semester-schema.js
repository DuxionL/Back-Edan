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

  return mongoose.model('Semester', semesterSchema);
};