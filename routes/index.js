const express = require("express");
const updateGame = require("../server/gameServer");
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.json({limit: '5mb'}));
router.use(bodyParser.urlencoded({ limit: '5mb', extended: false }));

let images = [];

router.use(express.json())

router.get("/", (req, res) =>
{
    updateGame.checkFlowerID(req);
    res.render("./index");
});

router.post("/", (req, res) =>
{
    const {parcel} = req.body;
    updateGame.startGame(parcel);
    console.log("Done");
    if (!parcel)
        return res.status(400).send({ status: "failed"})
    res.end();
});

module.exports = router;