document.addEventListener("DOMContentLoaded", () => {
  const langToggle = document.getElementById("lang-toggle");

  // Detect if we’re on the English page
  const isEnglish = window.location.pathname.includes("index.en.html");

  // Set switch position based on current page
  langToggle.checked = isEnglish;

  // When toggled, go to the right page
  langToggle.addEventListener("change", () => {
    if (langToggle.checked) {
      // go to English
      window.location.href = "index.en.html";
    } else {
      // go back to Portuguese
      window.location.href = "index.html";
    }
  });
});
