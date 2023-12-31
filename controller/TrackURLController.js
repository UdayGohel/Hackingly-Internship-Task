const TrackURLServices = require("./../services/TrackURLServices");

const TrackURL = async (req, res) => {
  const startUrl = req.body.url;

  const path = await TrackURLServices.getPhilosophyPath(startUrl);

  if (!path) {
    res.json({
      error: "Unable to find a valid path to Philosophy.",
    });
  } else {
    res.json({ path });
  }
};

module.exports = { TrackURL };
