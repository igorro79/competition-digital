const cookies = document.getElementById("cookies");
const accept = document.getElementById("accept-btn");
const servicesOrderBtn = document.querySelector(".services__main-btn");

const servieItemList = document.querySelector(".services__cards-list");

servicesOrderBtn.addEventListener("click", openForm);
bigRedBtn.addEventListener("click", openForm);
personOrderBtn.addEventListener("click", openForm);
whoOrderBtn.addEventListener("click", openForm);

accept.addEventListener("click", () => {
  cookies.style.display = "none";
});

servieItemList.addEventListener("click", (e) => {
  if (e.target.className === "services__card-title") {
    servieItemList.childNodes.forEach((i) => {
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
    e.target.parentNode.parentNode.classList.toggle(
      "services__link-grid--hidden"
    );
  }
});
