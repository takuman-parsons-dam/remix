const pageTextDict = {
  "typeface_1.html": "Typeface 1 (Serif)",
  "typeface_2.html": "Typeface 2 (Sans-Serif)",
  "typeface_3.html": "Typeface 3 (Script)",
  "typeface_4.html": "Typeface 4 (Desiplay)",
  "spacing_1.html": "Spacing&Color 1 (Tracking)",
  "spacing_2.html": "Spacing&Color 2 (Leading)",
  "spacing_3.html": "Spacing&Color 3 (Kerning)",
  "spacing_4.html": "Spacing&Color 4 (Color Contrast)",
  "hierarchy_1.html": "Visual Hierarchy 1 (Position)",
  "hierarchy_2.html": "Visual Hierarchy 2 (Background)",
  "hierarchy_3.html":
    "<span class='header-category-name'>VISUAL HIERARCHY</span><br><span class='header-variation-name'>3. EMPHASIS</span>",
  "hierarchy_4.html":
    "<span class='header-category-name'>VISUAL HIERARCHY</span><br><span class='header-variation-name'>4. FONT OPTIMIZATION</span>",
  "animation_1.html":
    "<span class='header-category-name'>ANIMATION</span><br><span class='header-variation-name'>1. Fade In</span>",
};

// Find the page header element(s)
const pageHeaders = document.querySelectorAll(".page-header");

// Update the text if the file name matches the dictionary
if (pageTextDict[currentPage]) {
  pageHeaders.forEach((header) => {
    header.innerHTML = pageTextDict[currentPage];
  });
}
