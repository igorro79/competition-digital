const servicesList = document.querySelector(".services__cards-list");
const faqList = document.querySelector(".faq__list");
const faqQuestionList = document.querySelectorAll(".faq__question");
const faqButtonList = document.querySelectorAll(".faq__question-button");
const faqAnsvers = document.querySelectorAll(".faq__answer");

servicesList.addEventListener("click", (e) => {
  if (e.target.className === "services__card-title") {
    e.target.parentNode.parentNode.lastElementChild.classList.add("open");
  }
});

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
