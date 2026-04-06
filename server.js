const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
/*
 Import Routes 
tambahin route ke .js yang lu pada bikin
contoh:
const userRoutes = require('./routes/user');
const courseRoutes = require('./routes/course');
const gradeRoutes = require('./routes/grade');
*/
/*
Use Routes
sama aja, tapi buat app.use
contoh:
app.use('/api/user', userRoutes);
app.use('/api/course', courseRoutes);
app.use('/api/grade', gradeRoutes);
 */


app.get('/', (req, res) => {
    res.send('LINTAR API is Running...');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});