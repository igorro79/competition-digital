const html = document.querySelector("html");
const theme = document.querySelector(".btn__theme");

theme.addEventListener("click", () => {
  html.classList.toggle("dark");
});
