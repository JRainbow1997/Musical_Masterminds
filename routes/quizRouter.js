const express = require('express');
const router = express.Router();
const LeaderBoard = require("../models/schemas/leaderboard");

router.get('/', async (req, res) => {
    const quiz = await getQuiz(req.query.questions, req.query.category, req.query.difficulty);
    res.status(200).json(quiz);
});

router.post('/', async (req, res) => {
    const context = { score: req.body.score, userId: req.body.userId, difficulty: req.body.difficulty, date: new Date() }
    new LeaderBoard(context).save((err, result) => {
        if (err) {
            res.status(500).json({ status: "Not OK", err });
        } else {
            res.status(200).send({ status: "OK", result });
        }
    })
});

module.exports = router;
