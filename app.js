const express = require("express");
const cors = require("cors");
const app = express();
const TrackURLRoute = require("./routes/TrackURLRoutes");
const port = 8000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", TrackURLRoute);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
