const e = require('express');
const express = require('express');
const router = express.Router();
const LeaderBoard = require("../models/schemas/leaderboard");
const User = require("../models/schemas/users")

//This route gets the a quiz
router.get('/', async (req, res) => {
    const quiz = await (req.query.questions, req.query.category, req.query.difficulty);
    res.status(200).json(quiz);
});
// This route sets the leaderboard 
router.post('/', async (req, res) => {
    const context = { score: req.body.score, userId: req.body.userId, difficulty: req.body.difficulty, date: new Date() }
    new LeaderBoard(context).save(async (err) => {
        if (err) {
            res.status(500).json({ status: "Not OK", err });
        } else {
            const user = await User.findById(req.body.userId).exec();
            if (user.total_points) {
                user.total_points += parseInt(req.body.score);
            } else {
                user.total_points = parseInt(req.body.score)
            }
            user.save((err) => {
                if (err) {
                    res.status(500).json({ status: "Not OK", err });
                } else if (!user) {
                    res.status(404).json({ status: "Not OK", err: "User doesn't exist." });
                } else {
                    res.status(200).json({ status: "OK", total_points: user.total_points, user })
                }
            });
        }
    });
});

module.exports = router;
