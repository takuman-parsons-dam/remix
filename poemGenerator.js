function generatePoem() {
  // Corrected backticks for template literals
  const poemText = `Against his coat<br />
    I brush my lips&mdash;<br />
    the silence of snowflakes`;

  const authorText = `&mdash;&ldquo;Against his coat&rdquo; by Alexis Rotella`;

  // Get elements by class name
  const poemElements = document.querySelectorAll(".poem");
  const authorElements = document.querySelectorAll(".author");

  poemElements.forEach((poem) => {
    poem.innerHTML = poemText;
  });

  authorElements.forEach((author) => {
    author.innerHTML = authorText;
  });
}
