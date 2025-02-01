const poemText = `Against his coat<br />
    I brush my lips&mdash;<br />
    the silence of snowflakes`;
const authorText = `&mdash;&ldquo;Against his coat&rdquo; by Alexis Rotella`;
const svgFiles = {
  "spacing_1.html": "poem_spacing_1",
  "spacing_2.html": "poem_spacing_2",
  "spacing_3.html": "poem_spacing_3",
  "spacing_4.html": "poem_spacing_4",
};

// Get elements by class name
const poemElement = document.querySelector(".poem");
const authorElement = document.querySelector(".author, .author-adjusted");
authorElement.innerHTML = authorText;

if (currentPage.indexOf("typeface") > -1) {
  poemElement.innerHTML = poemText;
} else if (currentPage.indexOf("spacing") > -1) {
  fetch(`../assets/svg/${svgFiles[currentPage]}.svg`)
    .then((response) => response.text())
    .then((svgContent) => {
      poemElement.innerHTML = svgContent;
    });
} else {
  fetch(`../assets/svg/poem_spacing_4.svg`)
    .then((response) => response.text())
    .then((svgContent) => {
      poemElement.innerHTML = svgContent;
    });
}
