document.addEventListener("DOMContentLoaded", function () {
  const categories = [
    { name: "typeface", label: "Typeface" },
    { name: "spacing", label: "Spacing" },
    { name: "hierarchy", label: "Hierarchy" },
    { name: "animation", label: "Animation" },
    { name: "fun", label: "Fun" },
    { name: "snowyfonts", label: "Snowy Fonts" },
    { name: "aa", label: "ASCII ARTS" },
  ];

  const currentFile = window.location.pathname.split("/").pop();
  const footer = document.querySelector(".page-footer, .page-footer-adjusted");

  let footerHTML = "";

  categories.forEach((category, catIndex) => {
    footerHTML += category.label + " ";

    // Loop from 1 to 4 to create links (or plain text if it’s the current page)
    for (let i = 1; i <= 4; i++) {
      const pageName = `${category.name}_${i}.html`;
      if (pageName === currentFile) {
        footerHTML += i;
      } else {
        footerHTML += `<a href="${pageName}">${i}</a>`;
      }

      if (i < 4) {
        footerHTML += " ";
      }
    }

    // Add a separator
    if (catIndex < categories.length - 1) {
      footerHTML += "  |  ";
    }
  });

  // Insert the generated HTML into the footer
  footer.innerHTML = footerHTML;
});
