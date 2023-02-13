const express = require('express');
const pageController = require('../controllers/pageController');


const router = express.Router();


router.route('/').get(pageController.getAboutPage);
router.route('/about').get(pageController.getIndexPage);


module.exports = router;
