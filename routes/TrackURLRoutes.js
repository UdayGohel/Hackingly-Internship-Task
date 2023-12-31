const express = require("express");
const TrackURLController = require("../controller/TrackURLController");
const router = express.Router();
const CheckWikipediaURL = require("../middleware/TrackURLMiddleWare");
router.post(
  "/getphilosophypage",
  CheckWikipediaURL,
  TrackURLController.TrackURL
);

module.exports = router;
