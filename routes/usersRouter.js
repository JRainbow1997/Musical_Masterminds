const express = require("express");
const router = express.Router();
const User = require("../models/schemas/users");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            res.status(500).json({ status: "Not OK", err });
        } else {
            res.status(200).json({ status: "OK", users });
        }
    });
});
//This is the signup route
router.post("/signup", async (req, res) => {
    if (req.body.password !== req.body.passwordCheck) {
        return res.status(400).json({ status: "Not OK", err: "Passwords Don\"t match" })
    }
    req.body.password = await bcrypt.hash(req.body.password, 10)
    new User(req.body).save((err, result) => {
        if (err) {
            res.status(500).json({ status: "Not OK", err });
        } else {
            res.status(200).send({ status: "OK", result });
        }
    });
});
//This route deletes the user by id
router.delete("/", async (req, res) => {
    console.log("Backend Reached");
    User.findByIdAndDelete(req.body.id, (err, docs) => {
        if (err) {
            res.status(500).json({ status: "Not OK" })
        } else if (!docs) {
            res.status(404).json({ status: "Not OK" })
        } else {
            res.status(200).json({ status: "OK", message: "Account deleted", docs })
        }
    });
});
//This route handles the signin
router.post("/", async (req, res) => {
    const { email, password } = req.body;
    if (await User.checkPassword(email, password)) {
        User.findOne({ emailAddress: email }, (err, user) => {
            if (err) {
                res.status(500).json({ status: "Not OK", err });
            } else if (!user) {
                res.status(404).json({ status: "Not OK", err: "User doesn't exist." });
            } else {
                res.status(200).json({ status: "OK", emailAddress: user.emailAddress, username: user.username, userId: user._id, fave_musical: user.fave_musical, birth_date: user.birth_date, total_points:user.total_points });
            }
        });
        return;
    }
    res.status(401).json({ status: "Not OK", err: "Unauthorised." });
});
//This route update a new password
router.post("/updatepassword", async (req, res) => {
    if (req.body.password !== req.body.passwordCheck) {
        return res.status(400).json({ status: "Not OK", err: "Passwords Don\"t match" })
    }
    User.findByIdAndUpdate(req.body.id, {password: await bcrypt.hash(req.body.password, 10)}, (err, user) => { 
        if (err) { 
            res.status(500).json({ status: "Not OK", err });
        } else if (!user) {
            res.status(404).json({ status: "Not OK", err: "User doesn't exist." });
        } else {
            res.status(200).json({ status: "OK", msg: "Updated Password", user});
        }
    });
});
//This route updates fave_musical by user id
router.post("/updatemusical", (req, res) => {
    const { fave_musical } = req.body;
    User.findByIdAndUpdate(req.body.id, {fave_musical}, (err, user) => {
        if (err) { 
            res.status(500).json({ status: "Not OK", err });
        } else if (!user) {
            res.status(404).json({ status: "Not OK", err: "User doesn't exist." });
        } else {
            res.status(200).json({status: "OK", fave_musical: user.fave_musical, user})
        }
    });
});
//This route updates date of birth by user id
router.post("/updatedob", (req, res) => {
    const {  birth_date } = req.body;
    User.findByIdAndUpdate(req.body.id, { birth_date}, (err, user) => {
        if (err) { 
            res.status(500).json({ status: "Not OK", err });
        } else if (!user) {
            res.status(404).json({ status: "Not OK", err: "User doesn't exist." });
        } else {
            res.status(200).json({status: "OK", birth_date: user.birth_date, user})
        }
    });
});
//This route updates total points by user id
router.post("/totalpoints", (req, res) => {
    const { total_points } = req.body;
    User.findByIdAndUpdate(req.body.id, {total_points}, (err, user) => {
        if (err) { 
            res.status(500).json({ status: "Not OK", err });
        } else if (!user) {
            res.status(404).json({ status: "Not OK", err: "User doesn't exist." });
        } else {
            res.status(200).json({status: "OK", total_points: user.total_points, user})
        }
    })
})
module.exports = router;