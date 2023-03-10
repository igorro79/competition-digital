//================FORM =================

const mainForm = document.getElementById("mainForm");

const username_02 = document.getElementById("username_02");
const email_02 = document.getElementById("email_02");
const phone_02 = document.getElementById("phone_02");
const company_02 = document.getElementById("company_02");
// const upload_02 = document.getElementById("upload_02");

//check on blur
username_02.addEventListener("blur", checkUsernameBlur);
email_02.addEventListener("blur", checkEmailBlur);
phone_02.addEventListener("blur", checkPhoneBlur);
company_02.addEventListener("blur", checkCompanyBlur);

//check on click
username_02.addEventListener("input", checkUsernameClick);
email_02.addEventListener("input", checkEmailClick);
phone_02.addEventListener("input", checkPhoneClick);
company_02.addEventListener("input", checkCompanyClick);

//Event Listeners mainForm
mainForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const submitBtn = e.target.querySelector("button[type=submit]");

  const userLengthValid = checkLength(username_02, 3, 50);
  const companyLengthValid = checkLength(company_02, 3, 50);
  const emailValid = checkEmail(email_02);
  const phoneValid = checkPhone(phone_02);

  const formData = new FormData(e.target);
  console.log(Object.fromEntries(formData));

  if (userLengthValid && companyLengthValid && emailValid && phoneValid) {
    showSpinner(submitBtn);

    setTimeout(() => {
      //TODO  if AJAX response OK run below ELSE show Alert ERROR
      hideSpinner(submitBtn);
      openPopupSentMsg();
      lockWrapper();
      e.target.reset();
    }, 3000);
  }
});

// ======== below NOT using===============
// ======== below NOT using===============
