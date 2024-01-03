const cheerio = require("cheerio");

const getNextURL = async (url) => {
  try {
    const res = await fetch(url);
    const html = await res.text();
    // To load Html Comnent from url
    const $ = cheerio.load(html);

    // Select <a> tags that are not under a <span> tag
    const firstLink = $("p a[href^='/wiki/']:not(:has(span))")
      .first()
      .attr("href");

    if (!firstLink) {
      console.log("No valid link found.");
      return null;
    }
    // Set current URL to check

    currentUrl = `https://en.wikipedia.org${firstLink}`;
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

    // Check that it includes in already path or not
    if (path.includes(nextURL)) {
      console.warn(
        "Loop detected: nextURL already exists in the path. Breaking."
      );
      return null; // Indicate loop detection
    }

    if (!nextURL) {
      return null;
    }
    // Push link into in path array
    path.push(nextURL);
    currentUrl = nextURL;
  }
  return path;
};
module.exports = { getPhilosophyPath, getNextURL };
