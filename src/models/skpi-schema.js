const mongoose = require('mongoose');

const skpiSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  certificate_name: { type: String, required: true },
  organization: { type: String, required: true },
  year: { type: Number, required: true },
  description: { type: String },
  certificate_file: { type: String },
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

module.exports = () => {
  const SKPI = mongoose.models.SKPI || mongoose.model('SKPI', skpiSchema);
  return { SKPI };
};