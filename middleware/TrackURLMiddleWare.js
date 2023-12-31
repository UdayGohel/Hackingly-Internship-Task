module.exports = function (req, res, next) {
  try {
    const wikipediaRegex = /^https:\/\/en\.wikipedia\.org\/.*/;

    if (!wikipediaRegex.test(req.body.url)) {
      res.json({
        error: "Please Write Appropriate URL",
      });
    } else {
      next();
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
