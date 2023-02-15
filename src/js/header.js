const html = document.querySelector("html");
const body = document.querySelector("body");
const theme = document.querySelector(".btn__theme");

const themeBtnGroup = document.querySelector(".btn-theme-group");
const langBtnGroupFull = document.querySelector(".btn-language-group-full");
const langBtnGroupMob = document.querySelector(".btn-language-group-mob");
const burgerBtnOpen = document.querySelector(".burger-open");
const burgerBtnClose = document.querySelector(".burger-close");
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

const servicesOrderBtn = document.querySelector(".services__main-btn");
const personOrderBtn = document.querySelector(".person__main-btn");
const whoOrderBtn = document.querySelector(".who__main-btn");

const dynamicForm = document.querySelector(".dynamic-form-wrapper");

// ---------- toggle header on scroll  ----------

const toggleHeader = (e) => {
  if (
    e.deltaY > 0 &&
    window.scrollY > 300 &&
    !body.classList.contains("lock-body")
  ) {
    header.style.opacity = 0;
    header.style.visibility = "hidden";
  }
  if (e.deltaY < 0 && !body.classList.contains("lock-body")) {
    header.style.visibility = "visible";
    header.style.opacity = 1;
  }
};

window.addEventListener("wheel", toggleHeader);

// ---------- mob menu service list  ----------

const toggleServiceList = () => {
  linkList.classList.toggle("show-links");
};
const openServiceListHover = () => {
  if (window.innerWidth >= 1920) linkList.classList.add("show-links");
};
const hideServiceList = () => {
  linkList.classList.remove("show-links");
};
navServices.addEventListener("mouseover", openServiceListHover);
navServices.addEventListener("click", toggleServiceList);
linkListBack.addEventListener("click", hideServiceList);

document.documentElement.addEventListener("click", function () {
  if (linkList.classList.contains("show-links") && window.innerWidth >= 1920) {
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
bigRedBtn.addEventListener("click", openForm);
servicesOrderBtn.addEventListener("click", openForm);
personOrderBtn.addEventListener("click", openForm);
whoOrderBtn.addEventListener("click", openForm);

closeFormBtn.addEventListener("click", closeForm);

// ----- burger ------
const openBurger = () => {
  navMenu.classList.add("active");
  burgerBtnOpen.classList.add("hidden");
  burgerBtnClose.classList.remove("hidden");
  body.classList.add("lock-body");
};
const closeBurger = () => {
  hideServiceList();
  navMenu.classList.remove("active");
  burgerBtnClose.classList.add("hidden");
  burgerBtnOpen.classList.remove("hidden");
  body.classList.remove("lock-body");
};

burgerBtnOpen.addEventListener("click", openBurger);
burgerBtnClose.addEventListener("click", closeBurger);
// ----- on window resize ------

window.addEventListener("resize", () => {
  if (window.innerWidth > 1920) {
    closeBurger();
  }
});
