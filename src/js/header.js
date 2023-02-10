const html = document.querySelector("html");
const theme = document.querySelector(".btn__theme");
const themeBtnGroup = document.querySelector(".btn-theme-group");
const langBtnGroup = document.querySelector(".btn-language-group-full");
const burgerBtnGroup = document.querySelector(".burger-wrapper");

theme.addEventListener("click", () => {
  html.classList.toggle("dark");
});

langBtnGroup.addEventListener("click", (e) => {
  langBtnGroup.childNodes.forEach((i) => {
    if (i.tagName === "BUTTON") i.classList.toggle("hidden");
  });
});
themeBtnGroup.addEventListener("click", (e) => {
  themeBtnGroup.childNodes.forEach((i) => {
    console.dir(i);
    if (i.tagName === "BUTTON") i.classList.toggle("hidden");
  });
});
burgerBtnGroup.addEventListener("click", (e) => {
  burgerBtnGroup.childNodes.forEach((i) => {
    console.dir(i);
    if (i.tagName === "BUTTON") i.classList.toggle("hidden");
  });
});

const btn = document.querySelector(".burger");
const navBtn = document.querySelector(".header");
const body = document.querySelector("body");
const main = document.querySelector(".main");

btn.addEventListener("click", () => {
  btn.classList.toggle("is-active");
  navBtn.classList.toggle("header--active");
  body.classList.toggle("body-bg");
  main.classList.toggle("main--active");
  linkList.style.left = "0";
});

const linkServices = document.querySelector(".nav__link-services");
const linkList = document.querySelector(".link__list");
const navItem = document.querySelector(".nav__item");

linkServices.addEventListener("click", () => {
  navItem.style.left = "100%";
  linkList.setAttribute("style", "left: 0; transform: scale(1);");
});

const linkListBtn = document.querySelector(".link__list-btn");

linkListBtn.addEventListener("click", () => {
  navItem.style.left = "0";
  linkList.setAttribute("style", "left: 100%; transform: scale(0);");
});
