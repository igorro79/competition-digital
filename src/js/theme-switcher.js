// On page load or when changing themes, best to add inline in `head` to avoid FOUC

const mode = document.getElementById("mode");
const darkBtn = document.getElementById("darkBtn");
const lightBtn = document.getElementById("lightBtn");

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  darkBtn.classList.add("hidden");
  lightBtn.classList.remove("hidden");
} else {
  document.documentElement.classList.remove("dark");
}
/**
 * Replaces button dark mode to light mode.
 */
mode.addEventListener("click", () => {
  document.querySelector("html").classList.toggle("dark");
  darkBtn.classList.toggle("hidden");
  lightBtn.classList.toggle("hidden");
  if (document.querySelector("html").classList.contains("dark")) {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
});
