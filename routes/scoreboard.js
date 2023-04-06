const express = require("express");
const router = express.Router();
const updateGame = require("../server/gameServer");

let score = [];

router.get("/", (req, res) =>
{
    res.render("./scoreboard", { team1: updateGame.getScore(0),
                                 team2: updateGame.getScore(1),
                                 team3: updateGame.getScore(2),
                                 team1Win: updateGame.checkWinner(0),
                                 team2Win: updateGame.checkWinner(1),
                                 team3Win: updateGame.checkWinner(2)});
});

router.post("/", (req, res) =>
{
    const {parcel} = req.body;
    if (parcel)
        updateGame.resetGame();
    if (!parcel)
        return res.status(400).send({ status: "failed"})
    return res.status(200).send({ status: "received"})
});

module.exports = router;