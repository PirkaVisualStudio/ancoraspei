document.getElementById("to-hr").addEventListener("click", (e) => {
  // 1 year = 31536000 seconds
  const maxAge = 60 * 60 * 24 * 365;
  document.cookie = `lang=hr; path=/; max-age=${maxAge}; SameSite=Lax;`;
  // Optionally redirect user to /hr
  window.location.href = "/";
});

document.getElementById("to-en").addEventListener("click", () => {
  const maxAge = 60 * 60 * 24 * 365;
  document.cookie = `lang=en; path=/; max-age=${maxAge}; samesite=lax`;
  window.location.href = "/en";
});
