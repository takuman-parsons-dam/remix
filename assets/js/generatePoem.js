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
const poemContainer = document.querySelector(".poem-container");
const authorElement = document.querySelector(".author, .author-adjusted");

if (authorElement) {
  authorElement.innerHTML = authorText;
}

if (/typeface|snowyfonts/.test(currentPage)) {
  poemElement.innerHTML = poemText;
} else if (currentPage.indexOf("spacing") > -1) {
  fetch(`../assets/svg/${svgFiles[currentPage]}.svg`)
    .then((response) => response.text())
    .then((svgContent) => {
      poemElement.innerHTML = svgContent;
    });
} // Fetch the SVG content
else
  fetch(`../assets/svg/poem_spacing_4.svg`)
    .then((response) => response.text())
    .then((svgContent) => {
      // Insert the SVG content into the DOM
      poemElement.innerHTML = svgContent;

      // Apply classes and set up animations based on currentPage
      if (currentPage === "animation_1.html") {
        poemContainer.classList.add("svg-wipeAnimation");
        authorElement.classList.add("author-fadeAnimation");
      }
      if (currentPage === "animation_2.html") {
        poemContainer.classList.add("svg-fadeAnimation");
        authorElement.classList.add("author-fadeAnimation");
      }
      if ((currentPage === "animation_3.html") | (currentPage === "animation_4.html")) {
        poemElement.classList.add("svg-fadeAnimationByEvent");
        authorElement.classList.add("author-fadeAnimationByEvent");

        const paths = poemElement.querySelectorAll("svg path");
        let currentPath = 0;

        if (currentPage === "animation_3.html") {
          document.body.addEventListener("click", function () {
            // Animate each path one-by-one
            if (currentPath < paths.length) {
              paths[currentPath].classList.add("animate");
              currentPath++;
            }
            // When all paths have been animated, animate the author element
            else if (currentPath === paths.length) {
              authorElement.classList.add("animate");
              currentPath++;
            }
          });
        }
        if (currentPage === "animation_4.html") {
          document.body.addEventListener("mousemove", function mouseMoveHandler() {
            if (currentPath < paths.length) {
              const currentElement = paths[currentPath];
              if (!currentElement.classList.contains("animate")) {
                currentElement.classList.add("animate");
                currentElement.addEventListener(
                  "animationend",
                  function () {
                    currentPath++;
                  },
                  { once: true }
                );
              }
            } else if (currentPath === paths.length) {
              authorElement.classList.add("animate");
              currentPath++;
            }
          });
        }
      }
      if (currentPage === "fun_4.html") {
        poemContainer.classList.add("svg-fadeAnimation");
        authorElement.classList.add("author-fadeAnimation");
      }
    });
