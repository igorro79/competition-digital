const btnDiscuss = document.getElementById("btnDiscuss");

btnDiscuss.addEventListener("click", () => {
  openDynamicForm();
  lockWrapper();
});

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

/**
 * Opens a support  (FAQ).
 */

function accordeonOpen() {
  let tl = document.querySelectorAll("#faqWrp .title ");

  for (let i = 0; i < tl.length; i++) {
    tl[i].addEventListener("click", function (e) {
      if (this.classList.contains("t_active")) {
        this.classList.remove("t_active");
        this.nextElementSibling.classList.remove("c_active");

        this.classList.remove("text-main");
        this.classList.add("text-dark");

        this.classList.add("dark:text-white");
        this.classList.remove("dark:text-main");
        /**
         * Button
         */
        this.firstElementChild.classList.toggle("hidden");
        this.lastElementChild.classList.toggle("hidden");
      } else {
        tl.forEach((item) => {
          if (item.classList.contains("t_active")) {
            item.classList.remove("t_active");
            item.nextElementSibling.classList.remove("c_active");

            item.classList.remove("text-main");
            item.classList.add("text-dark");

            item.classList.remove("dark:text-main");
            item.classList.add("dark:text-white");

            item.firstElementChild.classList.toggle("hidden");
            item.lastElementChild.classList.toggle("hidden");
            return;
          }
        });
        this.classList.add("t_active");
        this.nextElementSibling.classList.add("c_active");

        /**
         * Title text color red
         */

        this.classList.remove("text-dark");
        this.classList.add("text-main");

        this.classList.remove("dark:text-dark");
        this.classList.add("dark:text-main");

        /**
         * Button
         */
        this.firstElementChild.classList.toggle("hidden");
        this.lastElementChild.classList.toggle("hidden");
      }
    });
  }
}
accordeonOpen();
