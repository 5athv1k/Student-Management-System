# Student Management System

<p align="center">

![HTML](https://img.shields.io/badge/Frontend-HTML%20%7C%20CSS-orange)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green)
![Express.js](https://img.shields.io/badge/Framework-Express.js-blue)
![MySQL](https://img.shields.io/badge/Database-MySQL-blue)
![CRUD](https://img.shields.io/badge/Operations-CRUD-purple)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen)

</p>

## Student Management System

A simple full-stack web application for managing student records using **HTML, CSS, JavaScript, Node.js, Express.js, and MySQL**.

The application allows users to:

**Add → View → Edit → Delete**

student records through a web interface.

---

## Quick Navigation

[Problem Statement](#-problem-statement) •
[What It Does](#-what-it-does) •
[Features](#-key-features) •
[Architecture](#-system-architecture) •
[Tech Stack](#-tech-stack) •
[Database](#-database-design) •
[API Reference](#-api-reference) •
[Installation](#-installation-and-setup) •
[Screenshots](#-screenshots) •
[Result](#-result)

---

##  Problem Statement

Managing student information manually can make adding, viewing, editing, and deleting records inconvenient.

This project provides a simple web-based system where student records can be managed through a frontend interface while the data is stored in a MySQL database.

---

## What It Does

The system provides a basic interface for managing student records.

### Create
Add a new student using the form.

### Read
Display all students stored in the MySQL database.

### Update
Edit the details of an existing student.

### Delete
Remove a student from the database after confirmation.

---

##  Key Features

- ✅ Add new student records
- ✅ View all student records
- ✅ Edit existing student information
- ✅ Delete student records
- ✅ MySQL database integration
- ✅ Express.js API routes
- ✅ Simple and responsive interface
- ✅ Persistent database storage

---

##  System Architecture

```text
┌───────────────────────────────┐
│        Web Browser            │
│      HTML + CSS + JavaScript  │
└───────────────┬───────────────┘
                │
                ▼
┌───────────────────────────────┐
│      Node.js + Express.js     │
│          Backend              │
└───────────────┬───────────────┘
                │
                ▼
┌───────────────────────────────┐
│          mysql2               │
│       Database Connector      │
└───────────────┬───────────────┘
                │
                ▼
┌───────────────────────────────┐
│      MySQL: student_db        │
│                               │
│        students table         │
└───────────────────────────────┘
