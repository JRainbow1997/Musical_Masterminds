const express = require('express');
const router = express.Router();

const getQuiz = require('../lib/getQuiz');

router.get('/', (req, res) => {
    res.render('quiz');
});

router.post('/', async(req, res) => {
    
});

module.exports = router;
