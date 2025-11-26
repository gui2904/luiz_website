document.addEventListener("DOMContentLoaded", () => {
  const desktopToggle = document.getElementById("lang-toggle");
  const mobileToggle  = document.getElementById("lang-toggle-mobile");

  // Are we on the English page?
  const isEnglish = window.location.pathname.includes("index.en.html");

  // Set the initial state of both switches
  [desktopToggle, mobileToggle].forEach(toggle => {
    if (toggle) toggle.checked = isEnglish;
  });

  function handleLangChange(event) {
    const checked = event.target.checked;

    // Keep both toggles visually in sync
    if (desktopToggle && event.target !== desktopToggle) {
      desktopToggle.checked = checked;
    }
    if (mobileToggle && event.target !== mobileToggle) {
      mobileToggle.checked = checked;
    }

    // Redirect to the correct page
    const target = checked ? "index.en.html" : "index.html";
    window.location.href = target;
  }

  // Attach listeners if toggles exist on the page
  if (desktopToggle) {
    desktopToggle.addEventListener("change", handleLangChange);
  }
  if (mobileToggle) {
    mobileToggle.addEventListener("change", handleLangChange);
  }
});
