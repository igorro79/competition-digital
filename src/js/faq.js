const faqList = document.querySelector(".faq__list");
const faqQuestionList = document.querySelectorAll(".faq__question");
const faqButtonList = document.querySelectorAll(".faq__question-button");
const faqAnsvers = document.querySelectorAll(".faq__answer");

faqList.addEventListener("click", (e) => {
  if (e.target.className === "faq__question-button") {
    faqQuestionList.forEach((i) => {
      if (i.classList.contains("faq__question--active"))
        i.classList.remove("faq__question--active");
    });
    faqButtonList.forEach((i) => {
      if (i.classList.contains("faq__question-button--active"))
        i.classList.remove("faq__question-button--active");
    });
    faqAnsvers.forEach((i) => {
      if (i.classList.contains("open")) i.classList.remove("open");
    });

    e.target.parentNode.parentNode.lastElementChild.classList.add("open");
    e.target.classList.add("faq__question-button--active");
    e.target.previousElementSibling.classList.add("faq__question--active");
  }
});

// const btn = document.querySelector(".burger");
// const navBtn = document.querySelector(".header");
// const body = document.querySelector("body");
// const main = document.querySelector(".main");

// btn.addEventListener("click", () => {
//   btn.classList.toggle("is-active");
//   navBtn.classList.toggle("header--active");
//   body.classList.toggle("body-bg");
//   main.classList.toggle("main--active");
//   linkList.style.left = "0";
// });

// const linkServices = document.querySelector(".nav__link-services");
// const linkList = document.querySelector(".link__list");
// const navItem = document.querySelector(".nav__item");

// linkServices.addEventListener("click", () => {
//   navItem.style.left = "100%";
//   linkList.setAttribute("style", "left: 0; transform: scale(1);");
// });

// const linkListBtn = document.querySelector(".link__list-btn");

// linkListBtn.addEventListener("click", () => {
//   navItem.style.left = "0";
//   linkList.setAttribute("style", "left: 100%; transform: scale(0);");
// });
