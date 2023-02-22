const html = document.querySelector("html");
const body = document.querySelector("body");
const theme = document.querySelector(".btn__theme");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

const themeBtnGroup = document.querySelector(".btn-theme-group");
const langBtnGroupFull = document.querySelector(".btn-language-group-full");
const langBtnGroupMob = document.querySelector(".btn-language-group-mob");
const burgerBtnOpen = document.querySelector(".burger-open");
const burgerBtnClose = document.querySelector(".burger-close");
const navList = document.querySelector(".nav__list");
const linkList = document.querySelector(".link__list");
const navServicesFull = document.querySelector(".nav__link-services-btn");
const navServices = document.querySelector(".nav__link-services-btn");
const btn = document.querySelector(".burger");
const navMenu = document.querySelector(".nav");
const header = document.querySelector(".header");
const linkListBack = document.querySelector(".link__list-back-btn");

const letsTalkBtn = document.querySelector(".lets-talk-btn");
const bigRedBtn = document.querySelector(".big-red-btn");
const closeFormBtn = document.querySelector(".btn-colse-form");

const personOrderBtn = document.querySelector(".person__main-btn");
const whoOrderBtn = document.querySelector(".who__main-btn");

const dynamicForm = document.querySelector(".dynamic-form-wrapper");

// ---------- toggle header on scroll  ----------
let y = window.scrollY;
const toggleHeader = (e) => {
  if (
    window.scrollY > y &&
    window.scrollY > 300 &&
    !body.classList.contains("lock-body")
  ) {
    header.style.opacity = 0;
    header.style.visibility = "hidden";
    y = window.scrollY;
  }
  if (window.scrollY < y && !body.classList.contains("lock-body")) {
    header.style.visibility = "visible";
    header.style.opacity = 1;
    y = window.scrollY;
  }
};

window.addEventListener("scroll", toggleHeader);

// ---------- mob menu service list  ----------

const toggleServiceList = () => {
  console.log("toggle");
  linkList.classList.toggle("show-links");
  if (window.innerWidth < 1280) navList.classList.toggle("show-links");
};
const openServiceListHover = () => {
  console.log("hov");
  if (window.innerWidth >= 1280) linkList.classList.add("show-links");
};

const hideServiceList = () => {
  linkList.classList.remove("show-links");
  navList.classList.remove("show-links");
};

navServices.addEventListener("mouseenter", openServiceListHover);
navServices.addEventListener("click", toggleServiceList);
linkListBack.addEventListener("click", hideServiceList);

document.documentElement.addEventListener("click", (e) => {
  if (linkList.classList.contains("show-links") && window.innerWidth >= 1280) {
    hideServiceList();
  }
});

// ---------- change language ----------
const changeLanguage = (e) => {
  langBtnGroupFull.childNodes.forEach((i) => {
    if (i.tagName === "BUTTON") {
      i.classList.toggle("hidden");
    }
  });
  langBtnGroupMob.childNodes.forEach((i) => {
    if (i.tagName === "DIV") {
      i.classList.toggle("active-language");
    }
  });
};
langBtnGroupFull.addEventListener("click", changeLanguage);
langBtnGroupMob.addEventListener("click", changeLanguage);

// -----change theme------
themeBtnGroup.addEventListener("click", (e) => {
  html.classList.toggle("dark");
  themeBtnGroup.childNodes.forEach((i) => {
    if (i.tagName === "BUTTON") {
      i.classList.toggle("hidden");
    }
  });
});

// -----dynamic form ------

const openForm = () => {
  dynamicForm.classList.add("active-form");
  body.classList.add("lock-body");
};
const closeForm = () => {
  dynamicForm.classList.remove("active-form");
  body.classList.remove("lock-body");
};
letsTalkBtn.addEventListener("click", openForm);

closeFormBtn.addEventListener("click", closeForm);

// ----- burger ------
const openBurger = () => {
  navMenu.classList.add("active");
  burgerBtnOpen.classList.add("hidden");
  burgerBtnClose.classList.remove("hidden");
  body.classList.add("lock-body");
  navMenu.classList.add("red-gradient");
  navMenu.classList.add("red-gradient-top");
  navMenu.classList.add("red-gradient--nav");
};
const closeBurger = () => {
  hideServiceList();
  navMenu.classList.remove("active");
  burgerBtnClose.classList.add("hidden");
  burgerBtnOpen.classList.remove("hidden");
  body.classList.remove("lock-body");
  navMenu.classList.remove("red-gradient");
  navMenu.classList.remove("red-gradient-top");
  navMenu.classList.remove("red-gradient--nav");
};

burgerBtnOpen.addEventListener("click", openBurger);
burgerBtnClose.addEventListener("click", closeBurger);

// ----- on window resize ------

(() => {
  main.style.marginBottom = `${footer.offsetHeight}px`;
})();

window.addEventListener("resize", () => {
  main.style.marginBottom = `${footer.offsetHeight}px`;

  if (window.innerWidth > 1280) {
    closeBurger();
  }
});
