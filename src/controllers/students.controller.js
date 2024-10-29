const Student = require('../models/students.model');


const getAllStudents = async (req, res, next) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        next(error);
    }
}

const getById = async (req, res, next) => {
    const { studentId } = req.params;
    try {
        const student = await Student.findById(studentId);
        res.json(student);
    } catch (error) {
        next(error);
    }
}

const createStudent = async (req, res, next) => {
    try {
        const student = await Student.create(req.body);
        res.json(student);
    } catch (error) {
        next(error);
    }
}

const updateStudent = async (req, res, next) => {
    const { studentId } = req.params;
    try {
        const student = await Student.findByIdAndUpdate(studentId, req.body, { new: true });
        res.json(student);
    } catch (error) {
        next(error);
    }
}

const deleteStudent = async (req, res, next) => {
    const { studentId } = req.params;
    try {
        const student = await Student.findByIdAndDelete(studentId);
        res.json({ message: 'Student deleted', student });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAllStudents,
    getById,
    createStudent,
    updateStudent,
    deleteStudent
}