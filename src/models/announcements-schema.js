module.exports = (db) =>
  db.model(
    'Announcements',
    db.Schema({
      title: String,
      contents: String,
      postedAt: {
        type: Date,
        default: Date.now,
      },
    })
  );
