const button = document.getElementById("theme-toggle");
const html = document.documentElement;

// Load stored theme or default to dark
const currentTheme = localStorage.getItem("theme") || "theme-light";
html.classList.add(currentTheme);

button.addEventListener("click", () => {
  if (html.classList.contains("theme-light")) {
    html.classList.replace("theme-light", "theme-dark");
    localStorage.setItem("theme", "theme-dark");
  } else {
    html.classList.replace("theme-dark", "theme-light");
    localStorage.setItem("theme", "theme-light");
  }
});
