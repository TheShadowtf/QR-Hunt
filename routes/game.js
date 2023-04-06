const express = require("express");
const router = express.Router();
const updateGame = require("../server/gameServer");

router.get("/", (req, res) =>
{
    updateGame.checkFlowerID(req);
    res.render("./game", { text: req.query.v });
});

module.exports = router;