const cookies = document.getElementById("cookies");
const accept = document.getElementById("acceptBtn");

///--------- TODO logic
function handleCookie() {
  cookies.style.display = "none";
}
accept.addEventListener("click", handleCookie);
