const express = require('express');
const pageController = require('../controllers/pageController');


const router = express.Router();


router.route('/about').get(pageController.getIndexPage);
router.route('/').get(pageController.getAboutPage);


module.exports = router;