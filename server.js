const express = require("express");
const mysql = require("mysql2");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "student_db"
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error("MySQL connection failed:", err);
        return;
    }

    console.log("Connected to MySQL!");
});

app.use(express.static("public"));

// Home page
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// CREATE - Add student
app.post("/students", (req, res) => {
    const { name, email, phone, course } = req.body;

    const sql = `
        INSERT INTO students (name, email, phone, course)
        VALUES (?, ?, ?, ?)
    `;

    db.query(sql, [name, email, phone, course], (err, result) => {
        if (err) {
            console.error("Error adding student:", err);
            return res.status(500).send("Failed to add student");
        }

        console.log("Student added successfully!");
        res.redirect("/");
    });
});

// READ - Get all students
app.get("/students", (req, res) => {
    const sql = "SELECT * FROM students";

    db.query(sql, (err, results) => {
        if (err) {
            console.error("Error fetching students:", err);
            return res.status(500).send("Failed to fetch students");
        }

        res.json(results);
    });
});

// UPDATE - Update student
app.put("/students/:id", (req, res) => {
    const { id } = req.params;
    const { name, email, phone, course } = req.body;

    const sql = `
        UPDATE students
        SET name = ?, email = ?, phone = ?, course = ?
        WHERE id = ?
    `;

    db.query(sql, [name, email, phone, course, id], (err, result) => {
        if (err) {
            console.error("Error updating student:", err);
            return res.status(500).json({
                error: "Failed to update student"
            });
        }

        res.json({
            message: "Student updated successfully!"
        });
    });
});

// DELETE - Delete student
app.delete("/students/:id", (req, res) => {
    const { id } = req.params;

    const sql = "DELETE FROM students WHERE id = ?";

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error("Error deleting student:", err);
            return res.status(500).json({
                error: "Failed to delete student"
            });
        }

        res.json({
            message: "Student deleted successfully!"
        });
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});