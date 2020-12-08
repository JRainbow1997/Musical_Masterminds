const express = require("express");
const router = express.Router();
const LeaderBoard = require("../models/schemas/leaderboard");


router.get("/", (req, res) => {
    LeaderBoard.find({}, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ status: "Not OK", err });
        } else {
            res.status(200).json({ status: "OK", result });
        }
    });
});
    

module.exports = router;