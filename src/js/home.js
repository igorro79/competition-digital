const cookies = document.getElementById("cookies");
const accept = document.getElementById("acceptBtn");
const servicesOrderBtn = document.querySelector(".services__main-btn");

const servicesItemList = document.querySelector(".services__cards-list");

servicesOrderBtn.addEventListener("click", openForm);
bigRedBtn.addEventListener("click", openForm);
personOrderBtn.addEventListener("click", openForm);
whoOrderBtn.addEventListener("click", openForm);

accept.addEventListener("click", () => {
  cookies.style.display = "none";
});

servicesItemList.addEventListener("click", (e) => {
  if (
    e.target.className === "services__card-title" &&
    window.innerWidth < 820
  ) {
    e.preventDefault();

    if (
      e.target.parentNode.parentNode.classList.contains(
        "services__link-grid--hidden"
      )
    ) {
      servicesItemList.childNodes.forEach((i) => {
        if (i.nodeName === "DIV") {
          i.childNodes.forEach((j) => {
            if (j.nodeName === "DIV") {
              if (!j.classList.contains("services__link-grid--hidden")) {
                j.classList.add("services__link-grid--hidden");
              }
            }
          });
        }
      });

      e.target.parentNode.parentNode.classList.remove(
        "services__link-grid--hidden"
      );
    }
  }
});
