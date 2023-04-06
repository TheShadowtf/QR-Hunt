const express = require("express");
const chance = require("chance").Chance();
const shuffleArray = require("shuffle-array");
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

const gameRouter = require("../routes/game");
const verifyRouter = require("../routes/verify");
const index = require("../routes/index");
const scoreboardRouter = require("../routes/scoreboard");


app.use('/', index);
app.use('/game', gameRouter);
app.use('/verify', verifyRouter);
app.use('/scoreboard', scoreboardRouter);

app.listen(3001);