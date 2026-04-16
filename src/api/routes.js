const express = require('express');

const auth = require('./components/auth/auth-route');
const books = require('./components/books/books-route');
const users = require('./components/users/users-route');
const students = require('./components/students/students-route');
const grades = require('./components/grades/grades-route');

module.exports = () => {
  const app = express.Router();

  books(app);
  auth(app);
  users(app);
  students(app);
  grades(app);

  return app;
};
