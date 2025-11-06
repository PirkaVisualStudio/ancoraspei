const button = document.getElementById("theme-toggle");
const html = document.documentElement;

// Load stored theme or default to dark
const currentTheme = localStorage.getItem("theme") || "theme-dark";
html.classList.add(currentTheme);

button.addEventListener("click", () => {
  if (html.classList.contains("theme-dark")) {
    html.classList.replace("theme-dark", "theme-light");
    localStorage.setItem("theme", "theme-light");
  } else {
    html.classList.replace("theme-light", "theme-dark");
    localStorage.setItem("theme", "theme-dark");
  }
});
