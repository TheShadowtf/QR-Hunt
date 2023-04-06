const express = require("express");
const router = express.Router();
const updateGame = require("../server/gameServer");

router.post("/", (req, res, next) =>
{
    // console.log(req.body.teamID);
    updateGame.updateGame(req.body.teamID, res);
});

module.exports = router;
