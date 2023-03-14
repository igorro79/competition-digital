const dynamicFormWrapper = document.getElementById("dynamicFormWrapper");

const formMenu = document.getElementById("formMenu");

//-------------------------------
const showDynamicForm = () => {
  formMenu.classList.remove("invisible");
  formMenu.classList.remove("opacity-0");
  dynamicFormWrapper.classList.remove("translate-x-full");
  document.addEventListener("keydown", closeDynamicFormEsc);
};
const hideDynamicForm = () => {
  formMenu.classList.add("invisible");
  formMenu.classList.add("opacity-0");
  dynamicFormWrapper.classList.add("translate-x-full");
};
function closeDynamicFormEsc(e) {
  console.log(e.key);
  if (e.key === "Escape") {
    closeDynamicForm();
  }
}

function openDynamicForm() {
  // if burgerMenu is TRUE and Open than close it
  if (
    document.querySelector(".burger") &&
    document.querySelector(".burger").classList.contains("is-active")
  ) {
    burgerClose();
    document.querySelector(".burger").classList.remove("is-active");
  }
  lockWrapper();
  showDynamicForm();
  closePopupSentMsg();
}

function closeDynamicForm() {
  document.removeEventListener("keydown", closeDynamicFormEsc);
  hideDynamicForm();
  unlockWrapper();
}
/**
 * Opens a dynamic form if click on button in header.
 */
if (
  document.getElementById("btnContact") &&
  document.querySelector(".burger")
) {
  document
    .getElementById("btnContact")
    .addEventListener("click", openDynamicForm);
}

if (document.getElementById("btnFormMenu")) {
  document
    .getElementById("btnFormMenu")
    .addEventListener("click", closeDynamicForm);
}
//================FORM validate & Submit=================
const dynamicForm = document.getElementById("dynamicForm");

const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const company = document.getElementById("company");

//check on blur
username.addEventListener("blur", checkUsernameBlur);
email.addEventListener("blur", checkEmailBlur);
phone.addEventListener("blur", checkPhoneBlur);
company.addEventListener("blur", checkCompanyBlur);

//check on click
username.addEventListener("input", checkUsernameClick);
email.addEventListener("input", checkEmailClick);
phone.addEventListener("input", checkPhoneClick);
company.addEventListener("input", checkCompanyClick);

//Event Listeners dynamicForm
dynamicForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const submitBtn = e.target.querySelector("button[type=submit]");

  const userLengthValid = checkLength(username, 3, 30);
  const companyLengthValid = checkLength(company, 3, 30);
  const emailValid = checkEmail(email);
  const phoneValid = checkPhone(phone);

  const formData = new FormData(e.target);
  console.log(Object.fromEntries(formData));

  if (userLengthValid && companyLengthValid && emailValid && phoneValid) {
    showSpinner(submitBtn);
    setTimeout(() => {
      //TODO  if AJAX response OK run below ELSE show Alert ERROR

      hideSpinner(submitBtn);
      openPopupSentMsg();
      closeDynamicForm();
      e.target.reset();
    }, 3000);
  }
});
