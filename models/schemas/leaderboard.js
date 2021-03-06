const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const leaderboardSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    score: {
        type: Number,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});


module.exports = mongoose.model("Leaderboard", leaderboardSchema);