const express = require("express");
const cheerio = require("cheerio");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
const port = 8000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const getNextURL = async (url) => {
  try {
    const res = await fetch(url);
    const html = await res.text();
    const $ = cheerio.load(html);
    const firstLink = $("p a").first().attr("href");
    // console.log("firstlink =>" + firstLink);

    currentUrl = `https://en.wikipedia.org${firstLink}`;
    // console.log("currenturl => " + currentUrl);
    return currentUrl;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getPhilosophyPath = async (url) => {
  const path = [url];
  let currentUrl = url;
  while (currentUrl !== "https://en.wikipedia.org/wiki/Philosophy") {
    const nextURL = await getNextURL(currentUrl);
    // console.log("NextUrl=>" + nextURL);
    if (path.includes(nextURL)) {
      console.warn(
        "Loop detected: nextURL already exists in the path. Breaking."
      );
      return null; // Indicate loop detection
    }

    if (!nextURL) {
      return null;
    }

    path.push(nextURL);
    currentUrl = nextURL;
  }
  return path;
};

app.post("/getphilosophypage", async (req, res) => {
  const startUrl = req.body.url;

  const path = await getPhilosophyPath(startUrl);

  if (!path) {
    res.json({
      error: "Unable to find a valid path to Philosophy.",
    });
  } else {
    res.json({ path });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
