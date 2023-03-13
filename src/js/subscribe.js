id = "subscribe";
const modal = document.getElementById("modal");
const subscribeInput = document.getElementById("subscribe");
const subscribeBtn = document.getElementById("subscribeBtn");
const closeModal = document.querySelector(".modal-close-btn");

openVideoBtn.addEventListener("click", (e) => playVideo(e.target));

function closeModal() {
  unlockWrapper();
  modal.classList.toggle("visible");
  modal.classList.toggle("invisible");
  modal.classList.toggle("opacity-0");

  modal.querySelector("#video").setAttribute("src", "");
  modal
    .querySelector(".modal-close-btn")
    .removeEventListener("click", closeModal);
}

function openModal() {
  videoModal
    .querySelector(".modal-close-btn")
    .addEventListener("click", closeModal);
  lockWrapper();
  modal.classList.toggle("visible");
  modal.classList.toggle("invisible");
  modal.classList.toggle("opacity-0");
}
