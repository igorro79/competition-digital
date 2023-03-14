const subscribeBtn = document.getElementById("subscribeBtn");
const handleSubscribeBtn = document.getElementById("handleSubscribeBtn");
const modal = document.getElementById("modal");
const subscribeInput = document.getElementById("subscribeInput");
const closeModal = document.querySelector(".modal-close-btn");

subscribeBtn.addEventListener("click", openSubscribe);

function closeModalEsc(e) {
  console.log(e.key);
  if (e.key === "Escape") {
    closeSubscribe();
  }
}
function closeSubscribe() {
  document.removeEventListener("keydown", closeModalEsc);

  closeModal.removeEventListener("click", closeSubscribe);
  modal.classList.toggle("visible");
  modal.classList.toggle("invisible");
  modal.classList.toggle("opacity-0");

  unlockWrapper();
}

function openSubscribe() {
  document.addEventListener("keydown", closeModalEsc);
  closeModal.addEventListener("click", closeSubscribe);
  handleSubscribeBtn.addEventListener("click", handleSubscribe);
  modal.classList.toggle("visible");
  modal.classList.toggle("invisible");
  modal.classList.toggle("opacity-0");
  lockWrapper();
}

function handleSubscribe() {
  if (checkEmail(subscribeInput)) {
    console.log(subscribeInput.value);
  } else {
    console.log("object");
  }
}
