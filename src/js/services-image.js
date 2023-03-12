const target = document.querySelector(".services-target-img-js");
const sources = document.querySelectorAll(".services-source-img-js");
sources.forEach((item) => item.addEventListener("mouseenter", changeImage));

function changeImage(e) {
  target.setAttribute("src", e.target.dataset.src);
}
