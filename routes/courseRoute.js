const express = require('express');
const courseController = require('../controllers/courseController');


const router = express.Router();


router.route('/').post(courseController.createCourse); // Burdaki / -> http://localhost:3000/courses'ı ifade eder


module.exports = router;
