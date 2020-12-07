const express = require("express");
const bodyParser = require('body-parser');
const app = express();

const indexRouter = require('./routes/indexRouter');
const userRouter = require('./routes/userRouter');
const leaderboardRouter = require('./routes/leaderboardRouter');

app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/leaderboard", leaderboardRouter);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(5000, () => {
    console.log('App is online.');
});