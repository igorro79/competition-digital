const cookies = document.getElementById("cookies");
const accept = document.getElementById("accept-btn");

accept.addEventListener("click", () => {
  console.dir(cookies);

  cookies.style.display = "none";
});
