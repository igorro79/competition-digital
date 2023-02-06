const servicesList = document.querySelector(".services__cards-list");
servicesList.addEventListener("click", (e) => {
  if (e.target.className === "services__card-title") {
    e.target.parentNode.parentNode.lastElementChild.classList.add("open");
  }
});