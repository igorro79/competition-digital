const html = document.querySelector("html");
const body = document.querySelector("body");
const theme = document.querySelector(".btn__theme");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

const themeBtnGroup = document.querySelector(".btn-theme-group");
const langBtnGroupFull = document.querySelector(".btn-language-group-full-js");
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
const dynamicFormBtn = document.querySelector(".submit-dynamic-js");
const mainFormBtn = document.querySelector(".submit-js");
const successSend = document.querySelector(".success-wrapper");

function lockBody() {
  setTimeout(() => {
    body.classList.add("lock-body");
  });
}

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
  if (window.innerWidth < 1280) linkList.classList.toggle("show-links");
  if (window.innerWidth < 1280) navList.classList.toggle("show-links");
};
const openServiceListHover = () => {
  if (window.innerWidth >= 1280) linkList.classList.add("show-links");
};

const hideServiceList = () => {
  linkList.classList.remove("show-links");
  navList.classList.remove("show-links");
};

navServices.addEventListener("mouseenter", () => {
  openServiceListHover();
});
navServices.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (!linkList.matches(":hover") && !navServices.matches(":hover"))
      hideServiceList();
  }, 1000);
});

linkList.addEventListener("mouseleave", () => {
  if (window.innerWidth >= 1280) hideServiceList();
});
navServices.addEventListener("click", () => {
  toggleServiceList();
});
linkListBack.addEventListener("click", hideServiceList);

// ---------- change language ----------
const changeLanguage = (e) => {
  langBtnGroupFull.childNodes.forEach((i) => {
    if (i.tagName === "A") {
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

function openForm() {
  dynamicForm.classList.add("modal-container-active");
  lockBody();
}
function closeForm() {
  dynamicForm.classList.remove("modal-container-active");
  body.classList.remove("lock-body");
}
letsTalkBtn.addEventListener("click", () => {
  closeBurger();
  openForm();
});

closeFormBtn.addEventListener("click", () => {
  closeForm();
});

// ----- burger ------
function openBurger() {
  navMenu.classList.add("active");
  burgerBtnOpen.classList.add("hidden");
  burgerBtnClose.classList.remove("hidden");

  lockBody();

  navMenu.classList.add("red-gradient");
  navMenu.classList.add("red-gradient-top");
  navMenu.classList.add("red-gradient--nav");
}
function closeBurger() {
  hideServiceList();
  navMenu.classList.remove("active");
  burgerBtnClose.classList.add("hidden");
  burgerBtnOpen.classList.remove("hidden");
  body.classList.remove("lock-body");
  navMenu.classList.remove("red-gradient");
  navMenu.classList.remove("red-gradient-top");
  navMenu.classList.remove("red-gradient--nav");
}

burgerBtnOpen.addEventListener("click", openBurger);
burgerBtnClose.addEventListener("click", closeBurger);

// ----- on form submit ------
mainFormBtn.addEventListener("click", onSubmit);
dynamicFormBtn.addEventListener("click", onSubmit);

function closeSuccess() {
  successSend.classList.remove("success-wrapper-active");
  body.classList.remove("lock-body");
  header.removeEventListener("click", closeSuccess);
}
function onSubmit() {
  header.addEventListener("click", closeSuccess);
  setTimeout(() => {
    header.style.visibility = "visible";
    header.style.opacity = 1;
    successSend.classList.add("success-wrapper-active");
    dynamicForm.classList.remove("modal-container-active");
  }, 500);
}

// ----- on window resize ------

window.addEventListener("resize", () => {
  if (window.innerWidth > 1280 && navMenu.classList.contains("active")) {
    closeBurger();
  }
});
