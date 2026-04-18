module.exports = (db) =>
  db.model(
    'Payments',
    db.Schema({
      studentId: { type: Number, required: true, ref: 'Students' },
      billId: { type: db.Schema.Types.ObjectId, ref: 'Bills', required: true },
      amount: { type: Number, required: true },
      method: { type: String, enum: ['TRANSFER'], required: true },
    },{
      timestamps: true
    })
  );