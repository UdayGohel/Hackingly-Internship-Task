const express = require("express");
const TrackURLController = require("../controller/TrackURLController");
const router = express.Router();

router.post("/getphilosophypage", TrackURLController.TrackURL);

module.exports = router;
