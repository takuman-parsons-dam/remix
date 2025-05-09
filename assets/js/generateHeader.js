const pageTextDict = {
  "typeface_1.html": "Typeface 1 (Serif)",
  "typeface_2.html": "Typeface 2 (Sans-Serif)",
  "typeface_3.html": "Typeface 3 (Script)",
  "typeface_4.html": "Typeface 4 (Display)",
  "spacing_1.html": "Spacing&Color 1 (Tracking)",
  "spacing_2.html": "Spacing&Color 2 (Leading)",
  "spacing_3.html": "Spacing&Color 3 (Kerning)",
  "spacing_4.html": "Spacing&Color 4 (Color Contrast)",
  "hierarchy_1.html": "Visual Hierarchy 1 (Position)",
  "hierarchy_2.html": "Visual Hierarchy 2 (Background)",
  "hierarchy_3.html":
    "<span class='header-category-name'>VISUAL HIERARCHY</span><br><span class='header-variation-name'>3. Emphasis</span>",
  "hierarchy_4.html":
    "<span class='header-category-name'>VISUAL HIERARCHY</span><br><span class='header-variation-name'>4. Font Optimization</span>",
  "animation_1.html":
    "<span class='header-category-name'>ANIMATION</span><br><span class='header-variation-name'>1. Wipe Effect</span>",
  "animation_2.html":
    "<span class='header-category-name'>ANIMATION</span><br><span class='header-variation-name'>2. Fade In</span>",
  "animation_3.html":
    "<span class='header-category-name'>ANIMATION</span><br><span class='header-variation-name'>3. Click-Triggered Fade In</span>",
  "animation_4.html":
    "<span class='header-category-name'>ANIMATION</span><br><span class='header-variation-name'>4. MouseMove-Triggered Fade In</span>",
  "fun_1.html":
    "<span class='header-category-name'>FUN</span><br><span class='header-variation-name'>1. Voice Reader</span>",
  "fun_2.html":
    "<span class='header-category-name'>FUN</span><br><span class='header-variation-name'>2. Background with CSS</span>",
  "fun_3.html":
    "<span class='header-category-name'>FUN</span><br><span class='header-variation-name'>3. Background with video</span>",
  "fun_4.html":
    "<span class='header-category-name'>Snowy Font</span><br><span class='header-variation-name'>4. MIX!</span>",
  "snowyfonts_1.html":
    "<span class='header-category-name'>Snowy Font</span><br><span class='header-variation-name'>1. First Christmas</span>",
  "snowyfonts_2.html":
    "<span class='header-category-name'>Snowy Font</span><br><span class='header-variation-name'>2. Maple 3 Cartoon</span>",
  "snowyfonts_3.html":
    "<span class='header-category-name'>Snowy Font</span><br><span class='header-variation-name'>3. Santa's Air Mail</span>",
  "snowyfonts_4.html":
    "<span class='header-category-name'>Snowy Font</span><br><span class='header-variation-name'>4. Frostbitten Wanker</span>",
  "aa_1.html":
    "<span class='header-category-name'>ASCII ART</span><br><span class='header-variation-name'>1. Snowman</span>",
  "aa_2.html":
    "<span class='header-category-name'>ASCII ART</span><br><span class='header-variation-name'>2. Christmas Tree</span>",
  "aa_3.html":
    "<span class='header-category-name'>ASCII ART</span><br><span class='header-variation-name'>3. Couple in the winter</span>",
  "aa_4.html":
    "<span class='header-category-name'>ASCII ART</span><br><span class='header-variation-name'>4. Snowman2</span>",
};

// Find the page header element(s)
const pageHeaders = document.querySelectorAll(".page-header");

// Update the text if the file name matches the dictionary
if (pageTextDict[currentPage]) {
  pageHeaders.forEach((header) => {
    header.innerHTML = pageTextDict[currentPage];
  });
}
