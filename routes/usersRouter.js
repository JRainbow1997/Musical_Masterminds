const express = require("express");
const router = express.Router();
const User = require("../models/schemas/users");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            console.log(err);
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
            console.log(err);
            res.status(500).json({ status: "Not OK", err });
        } else {
            res.status(200).send({ status: "OK", result });
        }
    });
});
//This route deletes the user by id
router.delete("/", async (req, res) => {
    User.findByIdAndDelete(req.body.id, (err, docs) => {
        if (err) {
            res.status(500).json({status: "Not OK"})
        } else if (! docs){
            res.status(404).json({status: "Not OK"})
        } else {
            res.status(200).json({status: "OK", docs})    
        }
    });
});

router.post("/signin", async (req, res) => {
    const { email, password } = req.body;
    if (await User.checkPassword(email, password)) {
        console.log(1)
      User.findOne({ emailAddress: email }, (err, users) => {
        console.log(2)
        if (err) {
          console.log(err);
          res.status(500).json({ status: "Not OK", err });
        } else if (!users) {
          res.status(404).json({ status: "Not OK", err: "User doesn't exist." });
        } else {
          res.status(200).json({ status: "OK", emailAddress: users.emailAddress, username: users.username });
        }
      });
      return;
    }
    console.log(3)
    res.status(401).json({ status: "Not OK", err: "Unauthorised." });
});

module.exports = router;