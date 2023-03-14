//================FORM =================
const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//Show input error messages
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.classList.add("error");
  const p = formControl.querySelector("p");
  p.innerText = message;
}

//show success colour
function showSucces(input) {
  const formControl = input.parentElement;
  formControl.classList.remove("error");
}

//check username is valid on blur
function checkUsernameBlur(e) {
  if (e.target.value.trim().length >= 3 && e.target.value.trim().length < 50) {
    showSucces(e.target);
    return;
  }
  if (e.target.value === "") {
    showError(e.target, `Name is required`);
  } else {
    showError(e.target, "Name length from 3 to 50 charackters");
  }
}

//check username is valid onClick
function checkUsernameClick(e) {
  if (e.target.parentElement.classList.contains("error")) {
    if (
      e.target.value.trim().length >= 3 &&
      e.target.value.trim().length < 50
    ) {
      showSucces(e.target);
    } else {
      showError(e.target, "Name length from 3 to 50 charackters");
    }
  }
}

//check email is valid
function checkEmail(input) {
  if (emailRegex.test(input.value.trim())) {
    showSucces(input);
    return true;
  }
  if (input.value === "") {
    showError(input, `Email field is required`);
    return false;
  } else {
    showError(input, "Phone is not valid");
    return false;
  }
}
//check email is valid on blur

function checkEmailBlur(e) {
  if (emailRegex.test(e.target.value.trim())) {
    showSucces(e.target);
    return;
  }
  if (e.target.value === "") {
    showError(e.target, `Email field is required`);
    return;
  } else {
    showError(e.target, "Email is not valid");
  }
}
//check email is valid on Click

function checkEmailClick(e) {
  if (e.target.parentElement.classList.contains("error")) {
    if (emailRegex.test(e.target.value.trim())) {
      showSucces(e.target);
      return;
    } else {
      showError(e.target, "Email is not valid");
    }
  }
}

function checkPhone(input) {
  if (input.value.trim().length >= 10 && input.value.trim().length < 15) {
    showSucces(input);
    return true;
  }
  if (input.value.trim() === "") {
    showError(input, `Phone is required`);
    return false;
  }
  if (input.value.trim().length < 10 && input.value.trim().length > 15) {
    showError(input, "Phone number should be from 10 to 15 digits");
    return false;
  }
}
//check phone is valid on blur

function checkPhoneBlur(e) {
  if (e.target.value.trim().length >= 10 && e.target.value.trim().length < 15) {
    showSucces(e.target);
    return;
  }
  if (e.target.value === "") {
    showError(e.target, `Phone is required`);
  } else {
    showError(e.target, "Phone number should be from 10 to 15 digits");
  }
}
//check phone is valid on Click

function checkPhoneClick(e) {
  if (e.target.parentElement.classList.contains("error")) {
    if (
      e.target.value.trim().length >= 10 &&
      e.target.value.trim().length < 15
    ) {
      showSucces(e.target);
      return;
    } else {
      showError(e.target, "Phone number should be from 10 to 15 digits");
    }
  }
}

function checkCompanyBlur(e) {
  if (e.target.value.trim().length >= 3 && e.target.value.trim().length < 50) {
    showSucces(e.target);
    return;
  }
  if (e.target.value === "") {
    showError(e.target, `Company name is required`);
  } else {
    showError(e.target, "Company name length from 2 to 50 charackters");
  }
}
function checkCompanyClick(e) {
  if (e.target.parentElement.classList.contains("error")) {
    if (
      e.target.value.trim().length >= 3 &&
      e.target.value.trim().length < 50
    ) {
      showSucces(e.target);
      return;
    } else {
      showError(e.target, "Company name length from 2 to 50 charackters");
    }
  }
}

//check input Length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `Value must be at least ${min} characters`);
    return false;
  }
  if (input.value.length > max) {
    showError(input, `Value must be les than ${max} characters`);
    return false;
  } else {
    showSucces(input);
    return true;
  }
}

function showSpinner(button) {
  button.setAttribute("disabled", "true");
  button.firstElementChild.classList.add("hidden");
  button.lastElementChild.classList.remove("hidden");
}
function hideSpinner(button) {
  button.removeAttribute("disabled");
  button.firstElementChild.classList.remove("hidden");
  button.lastElementChild.classList.add("hidden");
}
