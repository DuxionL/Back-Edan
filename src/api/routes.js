const express = require('express');

const auth = require('./components/auth/auth-route');
const books = require('./components/books/books-route');
const users = require('./components/users/users-route');
const students = require('./components/students/students-route');
const announcements = require('./components/announcements/announce-route');
const grades = require('./components/grades/grades-route');
const courses = require('./components/courses/courses-route');
const schedules = require('./components/schedules/schedules-route');
const bills = require('./components/bills/bills-route');
const payments = require('./components/payments/payments-route');
const semester = require('./components/semester/semester-route');
module.exports = () => {
  const app = express.Router();

  books(app);
  auth(app);
  users(app);
  students(app);
  announcements(app);
  grades(app);
  courses(app);
  schedules(app);
  bills(app);
  payments(app);
  semester(app);
  return app;
};
