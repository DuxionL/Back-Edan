const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
  studentId: { type: Number, required: true, ref: 'Students' },
  semester: { type: String, required: true },
  amount: { type: Number, required: true },
  type: { type: String, enum: ['BPP', 'SKS'], required: true },
  status: { type: String, enum: ['UNPAID', 'PAID'], default: 'UNPAID' },
}, {
  timestamps: true,
});

module.exports = () => {
  const Bills = mongoose.models.Bills || mongoose.model('Bills', billSchema);
  return { Bills };
};