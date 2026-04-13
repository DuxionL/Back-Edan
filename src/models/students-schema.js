module.exports = (db) =>
  db.model(
    'Students',
    db.Schema({
      studentId: { type: Number, unique: true, required: true },
      name: String,
      address: String,
      phoneNumber: String,
    })
  );