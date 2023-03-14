const subscribeBtn = document.getElementById("subscribeBtn");
const handleSubscribeBtn = document.getElementById("handleSubscribeBtn");
const modal = document.getElementById("modal");
const subscribeInput = document.getElementById("subscribeInput");
const subscribeForm = document.getElementById("subscribeForm");
const closeModal = document.querySelector(".modal-close-btn");
const closeModal2 = document.querySelector(".modal-close-btn2");
const subscribeSuccessContainer = document.getElementById(
  "subscribeSuccessContainer"
);
const subscribeFormContainer = document.getElementById(
  "subscribeFormContainer"
);

subscribeBtn.addEventListener("click", openSubscribe);

function closeModalEsc(e) {
  if (e.key === "Escape") {
    closeSubscribe();
  }
}
function closeSubscribe() {
  document.removeEventListener("keydown", closeModalEsc);
  subscribeInput.removeEventListener("input", checkValidEmail);
  closeModal.removeEventListener("click", closeSubscribe);
  closeModal2.removeEventListener("click", closeSubscribe);
  subscribeForm.removeEventListener("submit", handleSubscribe);

  modal.classList.toggle("visible");
  modal.classList.toggle("invisible");
  modal.classList.toggle("opacity-0");
  unlockWrapper();
}

function openSubscribe() {
  document.addEventListener("keydown", closeModalEsc);
  subscribeInput.addEventListener("input", checkValidEmail);
  closeModal.addEventListener("click", closeSubscribe);
  closeModal2.addEventListener("click", closeSubscribe);
  subscribeForm.addEventListener("submit", handleSubscribe);

  modal.classList.toggle("visible");
  modal.classList.toggle("invisible");
  modal.classList.toggle("opacity-0");
  lockWrapper();
}

function toggleSubscribeSpinner() {
  handleSubscribeBtn.firstElementChild.classList.toggle("hidden");
}

function onSuccessSubscribe() {
  subscribeSuccessContainer.classList.toggle("invisible");
  subscribeSuccessContainer.classList.toggle("opacity-0");

  subscribeFormContainer.classList.toggle("invisible");
  subscribeFormContainer.classList.toggle("opacity-0");
}
// --------- emailRegex  from allFormHandler.js ---------
function checkValidEmail(e) {
  if (emailRegex.test(e.target.value.trim())) {
    handleSubscribeBtn.removeAttribute("disabled", "true");
  } else handleSubscribeBtn.setAttribute("disabled", "true");
}

function handleSubscribe(e) {
  e.preventDefault();

  closeModal.removeEventListener("click", closeSubscribe);
  document.removeEventListener("keydown", closeModalEsc);
  toggleSubscribeSpinner();
  handleSubscribeBtn.setAttribute("disabled", "true");

  console.log(subscribeInput.value);

  setTimeout(() => {
    if ("sent") {
      onSuccessSubscribe();
      toggleSubscribeSpinner();
      handleSubscribeBtn.removeAttribute("disabled", "true");

      setTimeout(() => {
        closeSubscribe();
        subscribeForm.reset();
        onSuccessSubscribe();
      }, 3000);
    } else {
      alert("somethin went wrong");
    }
  }, 2000);
}
