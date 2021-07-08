import express from 'express'
import student from '../models/student.js';
import { getStudents , createStudent } from '../controlllers/student';

const router = express.Router();

router.get('/', getStudents);
router.post('/', createStudent);
export default router ;