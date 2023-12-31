const cheerio = require("cheerio");

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
module.exports = { getPhilosophyPath, getNextURL };
