module.exports = (db) =>
  db.model(
    'Bills',
    db.Schema({
      studentId: { type: Number, required: true, ref: 'Students' },
      semester: { type: String, required: true },
      amount: { type: Number, required: true },
      type: { type: String, enum: ['BPP', 'SKS'], required: true },
      status: { type: String, enum: ['UNPAID', 'PAID'], default: 'UNPAID' },
      })
  );
