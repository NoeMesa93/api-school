const router = require('express').Router();
const { getById, getAllStudents, createStudent, updateStudent, deleteStudent } = require('../../controllers/students.controller');


router.get('/', getAllStudents);
router.get('/:studentId', getById);
router.post('/', createStudent);
router.put('/:studentId', updateStudent);
router.delete('/:studentId', deleteStudent);

module.exports = router;