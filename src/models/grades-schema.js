module.exports = (db) =>
  db.model(
    'Grades',
    db.Schema({
      studentId: { type: Number, required: true },
      type: {type: String, enum: ['UTS','UAS','SEMESTER'],required: true},
      score: {type: Number,required: true, min: 0,max: 100},
    })
  );