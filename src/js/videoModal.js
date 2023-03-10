const openVideoBtn = document.querySelector(".video-btn");
const videoModal = document.getElementById("videoModal");

openVideoBtn.addEventListener("click", (e) => playVideo(e.target));

function closeModal() {
  unlockWrapper();
  videoModal.classList.toggle("visible");
  videoModal.classList.toggle("invisible");
  videoModal.classList.toggle("opacity-0");

  videoModal.querySelector("#video").setAttribute("src", "");
  videoModal
    .querySelector(".modal-close-btn")
    .removeEventListener("click", closeModal);
}

function playVideo(btn) {
  videoModal
    .querySelector(".modal-close-btn")
    .addEventListener("click", closeModal);
  lockWrapper();
  videoModal.classList.toggle("visible");
  videoModal.classList.toggle("invisible");
  videoModal.classList.toggle("opacity-0");
  videoModal
    .querySelector("#video")
    .setAttribute(
      "src",
      `${btn.dataset.src}?autoplay=1&amp;modestbranding=1&amp;showinfo=0`
    );
  console.dir(videoModal);
  console.dir(btn);
}
