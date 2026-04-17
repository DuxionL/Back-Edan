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
### POST /api/grades/uts
- Create UTS grade record
- Protected route
- Request body:
  - `studentId`
  - `score`

### GET /api/grades/uts/:studentId
- Get UTS grade by `studentId`
- Protected route

### PUT /api/grades/uts/:id
- Update UTS grade by record ID
- Protected route
- Request body:
  - `score`

### DELETE /api/grades/uts/:id
- Delete UTS grade by record ID
- Protected route

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


