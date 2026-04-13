const express = require('express');

const books = require('./components/books/books-route');
const users = require('./components/users/users-route');
const students = require('./components/students/students-route');

module.exports = () => {
  const app = express.Router();

  books(app);
  users(app);
  students(app);

  return app;
};
