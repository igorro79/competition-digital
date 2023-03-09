/**
 * Opens a block services-06  on mobile.
 */

function opensBlockServices() {
  let tl = document.querySelectorAll("#servicesCardsWrp .title ");

  for (let i = 0; i < tl.length; i++) {
    tl[i].addEventListener("click", function (e) {
      if (window.innerWidth < 820 && e.target.nodeName === "H3") {
        e.preventDefault();
      }

      if (this.classList.contains("t_active") && e.target.nodeName === "H3") {
        this.classList.remove("t_active");
        this.lastElementChild.classList.remove("c_active");
        this.lastElementChild.classList.toggle("hidden");
        return;
      }
      if (!this.classList.contains("t_active")) {
        this.classList.add("t_active");
        this.lastElementChild.classList.add("c_active");
        this.lastElementChild.classList.toggle("hidden");
        return;
      }
    });
  }
}
opensBlockServices();
