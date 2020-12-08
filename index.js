const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();

mongoose.connect(process.env.mongoConnectionString,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})
const connection = mongoose.connection;

connection.once("open", function () {
    console.log("MongoDB database connection established successfully!");
})

app.use(cors());
app.use(session({resave: true, saveUninitialized: true, secret: 'asdf'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const indexRouter = require("./routes/indexRouter");
const usersRouter = require("./routes/usersRouter");
const leaderboardRouter = require("./routes/leaderboardRouter");

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/leaderboard", leaderboardRouter);

app.listen(5000, () => {
    console.log("App is online.");
});