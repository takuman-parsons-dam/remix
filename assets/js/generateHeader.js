const pageTextDict = {
  "typeface_1.html": "Typeface 1 (Serif)",
  "typeface_2.html": "Typeface 2 (Sans-Serif)",
  "typeface_3.html": "Typeface 3 (Script)",
  "typeface_4.html": "Typeface 4 (Desiplay)",
  "spacing_1.html": "Spacing 1 (Tracking)",
  "spacing_2.html": "Spacing 2 (Leading)",
  "spacing_3.html": "Spacing 3 (Kerning)",
  "spacing_4.html": "Spacing 4 (Color Contrast)",
};

// Find the page header element(s)
const pageHeaders = document.querySelectorAll(".page-header");

// Update the text if the file name matches the dictionary
if (pageTextDict[currentPage]) {
  pageHeaders.forEach((header) => {
    header.textContent = pageTextDict[currentPage];
  });
}
