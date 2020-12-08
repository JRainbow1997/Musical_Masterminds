const express = require('express');
const router = express.Router();
const LeaderBoard = require("../models/schemas/leaderboard");

const getQuiz = require('../lib/getQuiz');

router.get('/', async(req, res) => {
    // console.log(req.query)
    res.status(200).json(await getQuiz(req.query.questions, req.query.category, req.query.difficulty));
});

router.post('/', async(req, res) => {
    const context = {results : req.body.results, userId : req.body.userId, difficulty : req.body.difficulty, date : new Date()}
    new LeaderBoard(context).save((err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ status: "Not OK", err });
        } else {
            res.status(200).send({ status: "OK", result });
        }
    })
});

module.exports = router;
