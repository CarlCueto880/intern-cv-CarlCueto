console.log("script loaded");
// 🌙 / ☀️ THEME TOGGLE (CSS-based)
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeBtn.textContent = "☀️";
  } else {
    themeBtn.textContent = "🌙";
  }
});


const toggleBtn = document.getElementById("toggleAbout");
const aboutContent = document.getElementById("aboutContent");

toggleBtn.addEventListener("click", () => {
  if (aboutContent.style.display === "none") {
    aboutContent.style.display = "block";
    toggleBtn.textContent = "⬇️";
  } else {
    aboutContent.style.display = "none";
    toggleBtn.textContent = "⬆️";
  }
});

