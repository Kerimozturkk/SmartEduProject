const Course = require('../models/Course');

exports.createCourse = async (req, res) => {
  const course = await Course.create(req.body);

  try {
    res.status(201).json({
      //
      // Kurs oluşturma sayfası yok. O yüzden bu bir simülasyon
      status: 'success',
      course,
    });
  } catch {
    res.status(400).json({
      // Kurs oluşturma sayfası yok. O yüzden bu bir simülasyon
      status: 'fail',
      error,
    });
  }
};
