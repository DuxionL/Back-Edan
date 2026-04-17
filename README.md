# Backend UTS Project for Kelompok 4

## Back Edan

### Setup
1. Copy `.env.example` to `.env`
2. Configure your database settings in `.env`
3. Run `npm install`
4. Run `npm run dev`

### Server
- Default port: `5000`
- Base API path: `http://localhost:5000/api`

## Authentication
### POST /api/auth/login
- Request body:
  - `email` (String)
  - `password` (String)
- Response:
  - `token` (JWT)
  - `email`
  - `fullName`

### Protected routes
Protected endpoints require the `Authorization` header:
- `Authorization: JWT <token>`

## Users
### GET /api/users
- Get all users

### POST /api/users
- Create a new user
- Request body:
  - `email` (required)
  - `password` (required, min 8 chars)
  - `confirm_password` (must match `password`)
  - `full_name` (required)

### GET /api/users/:id
- Get user detail by ID

### PUT /api/users/:id
- Update user data
- Request body:
  - `email` (required)
  - `full_name` (required)

### PUT /api/users/:id/change-password
- Endpoint exists but is not implemented yet

### DELETE /api/users/:id
- Delete a user by ID

## Students
### POST /api/students
- Create new student biodata
- Request body:
  - `name` (required)
  - `address` (optional)
  - `phoneNumber` (optional)
- Response includes `studentId` generated automatically

### GET /api/students
- Get all students

### GET /api/students/:studentId
- Get student biodata by `studentId`

### PUT /api/students/:studentId
- Update student biodata
- Request body can include: 
  - `address`
  - `phoneNumber`

### DELETE /api/students/:studentId
- Delete a student record

## Grades

### UTS

#### POST /api/grades/uts

* Create UTS grade record
* Protected route
* Request body:

  * `studentId`
  * `score`

#### GET /api/grades/uts/:studentId

* Get UTS grade by `studentId`
* Protected route

#### PUT /api/grades/:id

* Update UTS grade by record ID
* Protected route
* Request body:

  * `score`

#### DELETE /api/grades/:id

* Delete UTS grade by record ID
* Protected route

---

### UAS

#### POST /api/grades/uas

* Create UAS grade record
* Protected route
* Request body:

  * `studentId`
  * `score`

#### GET /api/grades/uas/:studentId

* Get UAS grade by `studentId`
* Protected route

#### PUT /api/grades/:id

* Update UAS grade by record ID
* Protected route
* Request body:

  * `score`

#### DELETE /api/grades/:id

* Delete UAS grade by record ID
* Protected route

---

### TUGAS

#### POST /api/grades/tugas

* Create TUGAS grade record
* Protected route
* Request body:

  * `studentId`
  * `score`

#### GET /api/grades/tugas/:studentId

* Get TUGAS grade by `studentId`
* Protected route

#### PUT /api/grades/:id

* Update TUGAS grade by record ID
* Protected route
* Request body:

  * `score`

#### DELETE /api/grades/:id

* Delete TUGAS grade by record ID
* Protected route

### Protected routes
Protected endpoints require the `Authorization` header:
- `Authorization: JWT <token>`

## Announcements
### POST /api/announcements
- Create a new announcement
- Protected route
- Request body:
  - `title` (required)
  - `contents` (required)

### GET /api/announcements
- Get all announcements
- Protected route

### GET /api/announcements/:announcementId
- Get announcement detail by ID
- Protected route

### PUT /api/announcements/:announcementId
- Update announcement by ID
- Protected route
- Request body can include:
  - `title`
  - `contents`

### DELETE /api/announcements/:announcementId
- Delete announcement by ID

## Notes
- Some routes may require a valid JWT token.

## Courses
### POST /api/courses
- Create a new course record
- Protected route
- Request body:
  name (required)
  code (required, unique)
  sks (required, Number)
  description (optional)
  lecturer (optional, Object: name, nip, email)
  teams_code (optional)
  schedules (optional, Array of Objects: room, day, time)
- example
  {
    "name": "BACK-END PROGRAMMING",
    "code": "TK23022",
    "sks": 4,
    "lecturer": {
      "name": "JANSON HENDRYLI, S. Kom. M.Kom.",
      "nip": "10812001",
      "email": "jansonh@fti.untar.ac.id"
    },
    "teams_code": "wkr6t8j"
  }

### GET /api/courses
- Get all courses (Summary view)
- Protected route

### GET /api/courses/:id
- Get full course detail by ID
- Protected route

### PUT /api/courses/:id
- Update course data by ID
- Protected route
- Request body can include:
  - `name` 
  - `code`
  - `sks`
  - `description` 
  - `lecturer` 
  - `teams_code` 

### DELETE /api/courses/:id
- Delete a course by ID
- Protected route

## Schedules
### POST /api/schedules
- Create a new schedule record (assign course to a student with specific time & room)
- Protected route
- Request body:
    - studentId (required, Number, reference to students)
    - courseId (required, ObjectId, reference to course)
    - room (required, String)
    - day (required, String)
    - time (required, String)
- example:
    {
      "studentId": 12345,
      "courseId": "65f1a2b3c4d5e6f7890abc12",
      "room": "R0901",
      "day": "SENIN",
      "time": "15:30 s/d 17:10"
    }

### GET /api/schedules/:studentId
- Get all schedules for a specific student
- Protected route
- URL param:
    - studentId (required)
- Description:
    - Returns list of schedules belonging to the student
    - Includes course information (using populate)

### PUT /api/schedules/:id
- Update schedule data (e.g., change room, day, time, or course)
- Protected route
- URL param:
    - id (required, schedule ID)
- Request body can include:
    - room
    - day
    - time
    - courseId
- example:
    {
      "room": "R0902",
      "day": "RABU",
      "time": "11:30 s/d 13:10"
    }

### DELETE /api/schedules/:id
- Delete a schedule by ID
- Protected route
- URL param:
    - id (required, schedule ID)

## Bills
### POST /api/bills
- Create a new bill (tagihan mahasiswa)
- Protected route
- Request body:
    - studentId (required, Number, reference to students)
    - semester (required, String)
    - amount (required, Number)
    - type (required, String: BPP | SKS)
- example:
    {
      "studentId": 12345,
      "semester": "1",
      "amount": 5000000,
      "type": "BPP"
    }

### GET /api/bills/:studentId
- Get all bills for a specific student
- Protected route
- URL param:
    - studentId (required, Number, reference to students)
- Description:
    - Returns list of bills belonging to the student
    - Each bill includes amount, semester, type, and status (UNPAID | PAID)

## Payments
### POST /api/payments
- Create a new payment (bayar tagihan mahasiswa)
- Protected route
- Request body:
    - studentId (required, Number, reference to students)
    - billId (required, ObjectId, reference to bills)
    - amount (required, Number)
    - method (required, String: TRANSFER)
- example:
    {
      "studentId": 12345,
      "billId": "65f1a2b3c4d5e6f7890abc12",
      "amount": 5000000,
      "method": "TRANSFER"
    }

### GET /api/payments/:studentId
- Get all payment history for a specific student
- Protected route
- URL param:
    - studentId (required)
- Description:
    - Returns list of payments made by the student
    - Includes related bill information (using populate)