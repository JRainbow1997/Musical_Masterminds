const express = require("express");
const router = express.Router();
const LeaderBoard = require("../models/schemas/leaderboard");
const User = require("../models/schemas/users");

// This route gets the leaderboard
router.get("/", (req, res) => {
    LeaderBoard.find({}, (err, result) => {
        if (err) {
            res.status(500).json({ status: "Not OK", err });
        } else {
            res.status(200).json({ status: "OK", result });
        }
    });
});
//This route posts all results from each users
router.post("/", (req, res) => {
    User.find({}, async (err, users) => {
        if (err) {
            res.status(500).json({ status: "Not OK", err });
        } else {
            const results = await Promise.all(users.map(async (user) => {
                const allResults = await LeaderBoard.find({ userId: user._id }).exec();
                return { username: user.username, results: allResults }
            }));
            res.status(200).json({ status: "OK", results });
        }
    });
});
module.exports = router;