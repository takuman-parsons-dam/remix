const pageTextDict = {
  "typeface_1.html": "Typeface 1 (Serif)",
  "typeface_2.html": "Typeface 2 (Sans-Serif)",
  "typeface_3.html": "Typeface 3 (Script)",
  "typeface_4.html": "Typeface 4 (Desiplay)",
};

// Get the current HTML file name
const pathArray = window.location.pathname.split("/");
console.log(pathArray);
const currentPage = pathArray[pathArray.length - 1];

// Find the page header element(s)
const pageHeaders = document.querySelectorAll(".page-header");

// Update the text if the file name matches the dictionary
if (pageTextDict[currentPage]) {
  pageHeaders.forEach((header) => {
    header.textContent = pageTextDict[currentPage];
  });
}
