const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));

// Create a connection to the MySQL database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'scott',
    database: 'form_db'
});

// Connect to the database
db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

// Handle form submission
app.post('/submit-form', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
    db.query(sql, [name, email], (err, result) => {
        if (err) {
            return res.send('Error occurred: ' + err.message);
        }
        res.send('New record created successfully');
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
