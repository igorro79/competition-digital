const mainNav = document.getElementById("mainNav");
const body = document.getElementsByTagName("body");

const html = document.querySelector("html");
const wrapper = document.querySelector(".wrapper");
const cookies = document.getElementById("cookies");
const accept = document.getElementById("acceptBtn");
const headerContainer = document.getElementById("header-container");

const mode = document.getElementById("mode");
const darkBtn = document.getElementById("darkBtn");
const lightBtn = document.getElementById("lightBtn");
// const mode_02 = document.querySelector("#mode_02");
// const darkBtn_02 = document.querySelector("#darkBtn_02");
// const lightBtn_02 = document.querySelector("#lightBtn_02");

const menu = document.getElementById("menu");
const dynamicMenu = document.getElementById("dynamicMenu");
const burger = document.querySelector(".burger");
const closeMenuTablet = document.getElementById("closeMenuTablet");

const servicesModal = document.getElementById("servicesModal");
const servicesMenu = document.getElementById("servicesMenu");
const backMenuServices = document.getElementById("backMenuServices");
const btnServices = document.getElementById("btnServices");

//  popup -sent- form header.
const popupForms = document.getElementById("popupForms");

const btnContact = document.getElementById("btnContact");
const btnContactTablet = document.getElementById("btnContactTablet");

// const dynamicForm = document.getElementById("dynamicForm");
// const mainForm = document.getElementById("mainForm");

const btnFormMenu = document.getElementById("btnFormMenu");
const formMenu = document.getElementById("formMenu");
const dynamicMenuContainer = document.querySelector(".dynamicMenuContainer");

const btnDiscuss = document.getElementById("btnDiscuss");
const logoOpacity = document.getElementById("logoOpacity");
const submit = document.getElementById("submit");
const btnClosePopupForms = document.getElementById("btnClosePopupForms");

// const formMenu = document.getElementById("formMenu");
const upButton = document.getElementById("upButton");

//=============== functions ===============

function lockWrapper() {
  wrapper.classList.add("lock-wrapper");
}
function unlockWrapper() {
  wrapper.classList.remove("lock-wrapper");
}
//-------------------------------
function hideMainHeader() {
  headerContainer.classList.add("hidden");
  headerContainer.classList.remove("flex");
}
function showMainHeader() {
  headerContainer.classList.add("flex");
  headerContainer.classList.remove("hidden");
}
//-------------------------------
const menuServicesToggle = () => {
  servicesMenu.classList.toggle("-translate-x-full");
  servicesModal.classList.toggle("translate-x-[100vw]");
  window.innerWidth < 820
    ? dynamicMenuContainer.classList.toggle("min-h-[650px]")
    : dynamicMenuContainer.classList.toggle("min-h-[770px]");
};
const menuServicesClose = () => {
  servicesMenu.classList.remove("-translate-x-full");
  servicesModal.classList.add("translate-x-[100vw]");
  dynamicMenuContainer.classList.remove("min-h-[770px]");
  dynamicMenuContainer.classList.remove("min-h-[650px]");
};

//-------------------------------
const openPopupSentMsg = () => {
  popupForms.classList.add("flex");
  popupForms.classList.remove("hidden");
};
const closePopupSentMsg = () => {
  if (!popupForms.classList.contains("hidden")) {
    popupForms.classList.add("hidden");
    popupForms.classList.remove("flex");
  }
};

//-------------------------------
const openDynamicForm = () => {
  formMenu.classList.remove("invisible");
  formMenu.classList.remove("opacity-0");
  dynamicFormWrapper.classList.remove("translate-x-full");
};
const closeDynamicForm = () => {
  formMenu.classList.add("invisible");
  formMenu.classList.add("opacity-0");
  dynamicFormWrapper.classList.add("translate-x-full");
};

//-------------------------------
const openDynamicMenu = () => {
  menu.classList.remove("invisible");
  menu.classList.remove("opacity-0");
  dynamicMenu.classList.remove("translate-x-full");
};
const closeDynamicMenu = () => {
  menu.classList.add("invisible");
  menu.classList.add("opacity-0");
  dynamicMenu.classList.add("translate-x-full");
};
const toggleDynamicMenu = () => {
  menu.classList.toggle("invisible");
  menu.classList.toggle("opacity-0");
  dynamicMenu.classList.toggle("translate-x-full");
};
//---------------------------------------

// ----  Close a menu tablet. ---
function burgerClose() {
  burger.classList.toggle("is-active");
  menuServicesClose();
  showMainHeader();
  unlockWrapper();
  closeDynamicMenu();
}

// ----  Open a menu tablet. ---
function burgerOpen() {
  burger.classList.toggle("is-active");
  if (window.innerWidth >= 820) hideMainHeader();
  lockWrapper();
  closePopupSentMsg();
  openDynamicMenu();
}

//--- change mob/tablet menu social margin on resize ------
function toggleMobileMenuContainerHeigh() {
  dynamicMenuContainer.classList.toggle("min-h-[770px]");
  dynamicMenuContainer.classList.toggle("min-h-[650px]");
}

//=============== ! functions ===============

// ----- on window resize ------
window.addEventListener("resize", () => {
  if (
    (dynamicMenuContainer.classList.contains("min-h-[770px]") &&
      window.innerWidth < 820) ||
    (dynamicMenuContainer.classList.contains("min-h-[650px]") &&
      window.innerWidth >= 820)
  ) {
    toggleMobileMenuContainerHeigh();
  }

  if (window.innerWidth > 1280 && !menu.classList.contains("invisible")) {
    burgerClose();
  }
  if (window.innerWidth < 820 && !menu.classList.contains("invisible")) {
    showMainHeader();
  }
  if (window.innerWidth >= 820 && !menu.classList.contains("invisible")) {
    hideMainHeader();
  }
});
// -------- btn to top ----------
upButton.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

closeMenuTablet.addEventListener("click", burgerClose);
burger.addEventListener("click", () => {
  menu.classList.contains("invisible") ? burgerOpen() : burgerClose();
});

// ---------- toggle header visibility on scroll  ----------
let y = window.pageYOffset;
const toggleHeader = (e) => {
  if (window.pageYOffset > y && window.pageYOffset > 300) {
    mainNav.classList.add("isFixed");
    mainNav.classList.remove("isVisible");
  }
  if (
    window.pageYOffset < y &&
    mainNav.classList.contains("isFixed") &&
    !mainNav.classList.contains("isVisible")
  ) {
    mainNav.classList.add("isVisible");
  }
  if (window.pageYOffset === 0) {
    mainNav.classList.remove("isVisible", "isFixed");
  }
  y = window.pageYOffset;
};
window.addEventListener("scroll", toggleHeader);

/**
 * Toggle dark mode.
 */

// On page load or when changing themes, best to add inline in `head` to avoid FOUC

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  darkBtn.classList.add("hidden");
  lightBtn.classList.remove("hidden");
} else {
  document.documentElement.classList.remove("dark");
}
/**
 * Replaces button dark mode to light mode.
 */
mode.addEventListener("click", () => {
  html.classList.toggle("dark");
  darkBtn.classList.toggle("hidden");
  lightBtn.classList.toggle("hidden");
  if (html.classList.contains("dark")) {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
});

btnServices.addEventListener("click", menuServicesToggle);

/**
 * Back a menu services.
 */

backMenuServices.addEventListener("click", menuServicesToggle);

/**
 * Opens a menu form mobile.
 */
btnContact.addEventListener("click", () => {
  if (burger.classList.contains("is-active")) burgerClose();
  lockWrapper();
  openDynamicForm();
  burger.classList.remove("is-active");
  closePopupSentMsg();
});

btnDiscuss.addEventListener("click", () => {
  openDynamicForm();
  lockWrapper();
});

btnFormMenu.addEventListener("click", () => {
  closeDynamicForm();
  unlockWrapper();
});

/**
 * Opens a menu form-tablet.
 */

btnContactTablet.addEventListener("click", () => {
  openDynamicForm();
  menuServicesClose();
  lockWrapper();
  showMainHeader();
  closePopupSentMsg();
  burger.classList.toggle("is-active");
  closeDynamicMenu();
});
// }

/**
 * Opens a block services-06  on mobile.
 */

function opensBlockServices() {
  let tl = document.querySelectorAll("#servicesCardsWrp .title ");

  for (let i = 0; i < tl.length; i++) {
    tl[i].addEventListener("click", function (e) {
      if (window.innerWidth < 820 && e.target.nodeName === "H3") {
        e.preventDefault();
      }

      if (this.classList.contains("t_active") && e.target.nodeName === "H3") {
        this.classList.remove("t_active");
        this.lastElementChild.classList.remove("c_active");
        this.lastElementChild.classList.toggle("hidden");
        return;
      }
      if (!this.classList.contains("t_active")) {
        this.classList.add("t_active");
        this.lastElementChild.classList.add("c_active");
        this.lastElementChild.classList.toggle("hidden");
        return;
      }
    });
  }
}
opensBlockServices();

/**
 * Opens a support  (FAQ).
 */

function accordeonOpen() {
  let tl = document.querySelectorAll("#faqWrp .title ");

  for (let i = 0; i < tl.length; i++) {
    tl[i].addEventListener("click", function (e) {
      if (this.classList.contains("t_active")) {
        this.classList.remove("t_active");
        this.nextElementSibling.classList.remove("c_active");

        this.classList.remove("text-main");
        this.classList.add("text-dark");

        this.classList.add("dark:text-white");
        this.classList.remove("dark:text-main");
        /**
         * Button
         */
        this.firstElementChild.classList.toggle("hidden");
        this.lastElementChild.classList.toggle("hidden");
      } else {
        tl.forEach((item) => {
          if (item.classList.contains("t_active")) {
            item.classList.remove("t_active");
            item.nextElementSibling.classList.remove("c_active");

            item.classList.remove("text-main");
            item.classList.add("text-dark");

            item.classList.remove("dark:text-main");
            item.classList.add("dark:text-white");

            item.firstElementChild.classList.toggle("hidden");
            item.lastElementChild.classList.toggle("hidden");
            return;
          }
        });
        this.classList.add("t_active");
        this.nextElementSibling.classList.add("c_active");

        /**
         * Title text color red
         */

        this.classList.remove("text-dark");
        this.classList.add("text-main");

        this.classList.remove("dark:text-dark");
        this.classList.add("dark:text-main");

        /**
         * Button
         */
        this.firstElementChild.classList.toggle("hidden");
        this.lastElementChild.classList.toggle("hidden");
      }
    });
  }
}
accordeonOpen();

btnClosePopupForms.addEventListener("click", () => {
  closePopupSentMsg();
  unlockWrapper();
  //------------------------------------------------------------------
});

//================FORM =================
const dynamicForm = document.getElementById("dynamicForm");
const mainForm = document.getElementById("mainForm");

const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const company = document.getElementById("company");
// const upload = document.getElementById("upload");

const username_02 = document.getElementById("username_02");
const email_02 = document.getElementById("email_02");
const phone_02 = document.getElementById("phone_02");
const company_02 = document.getElementById("company_02");
// const upload_02 = document.getElementById("upload_02");

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

function checkUsernameBlur(e) {
  if (e.target.value.trim().length >= 3 && e.target.value.trim().length < 50) {
    showSucces(e.target);
    return;
  }
  if (e.target.value === "") {
    showError(e.target, `Name is required`);
  } else {
    showError(e.target, "Name length from 2 to 50 charackters");
  }
}
//check email is valid
function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim())) {
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
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(e.target.value.trim())) {
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

//get FieldName
// function getFieldName(input) {
//   return input.id.charAt(0).toUpperCase() + input.id.slice(1);
// }

function toggleSpinner(button) {
  button.toggleAttribute("disabled", "true");
  button.firstElementChild.classList.toggle("hidden");
  button.lastElementChild.classList.toggle("hidden");
}

//check on blur
username.addEventListener("blur", checkUsernameBlur);
username_02.addEventListener("blur", checkUsernameBlur);
email.addEventListener("blur", checkEmailBlur);
email_02.addEventListener("blur", checkEmailBlur);
phone.addEventListener("blur", checkPhoneBlur);
phone_02.addEventListener("blur", checkPhoneBlur);
company.addEventListener("blur", checkCompanyBlur);
company_02.addEventListener("blur", checkCompanyBlur);

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
    toggleSpinner(submitBtn);
    setTimeout(() => {
      // if AJAX response OK run below
      toggleSpinner(submitBtn);
      openPopupSentMsg();
      closeDynamicForm();
      e.target.reset();
    }, 3000);
  }
});

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
    toggleSpinner(submitBtn);

    setTimeout(() => {
      // if AJAX response OK run below
      toggleSpinner(submitBtn);
      openPopupSentMsg();
      lockWrapper();
      e.target.reset();
    }, 3000);
  }
});

// ======== below NOT using===============
// ======== below NOT using===============
// ======== below NOT using===============
// ======== below NOT using===============

/**
 * Send Mail.
 */

// document.addEventListener("DOMContentLoaded", function () {

// });

// function sendMail() {
//   var params = {
//     name: document.getElementById('name').value,
//     email: document.getElementById('email').value,
//     phone: document.getElementById('phone').value,
//     company: document.getElementById('company').value,
//     message: document.getElementById('message').value,
//     choise: document.getElementById('choise').value,
//   };

//   const serviceID = 'service_kwn6me4';
//   const templateID = 'template_vb6k6pq';

//   emailjs
//     .send(serviceID, templateID, params)
//     .then((res) => {
//       (document.getElementById('name').value = ''),
//         (document.getElementById('email').value = ''),
//         (document.getElementById('phone').value = ''),
//         (document.getElementById('company').value = ''),
//         (document.getElementById('message').value = ''),
//         (document.getElementById('choise').value = ''),
//         console.log(res);
//       alert('Yuor message sent successfully');
//     })
//     .catch((err) => console.log(err));
// }

/**
 * Send mail-02
 */

function toggleCover() {
  const cover = document.getElementById("cover");
  if (cover.classList.contains("_sending")) {
    cover.classList.remove("_sending");
  } else {
    cover.classList.add("_sending");
  }
}
async function sendData(data) {
  return await fetch(window.location.href, { method: "POST", body: data });
}
function formValidate(formValid) {
  let error = 0;
  let formReq = formValid.querySelectorAll("._req");
  for (let i = 0; i < formReq.length; i++) {
    const input = formReq[i];
    input.classList.remove("_error");
    if (input.classList.contains("_email")) {
      if (!emailValidate(input)) {
        input.classList.add("_error");
        error++;
      }
    } else if (
      input.getAttribute("type") === "checkbox" &&
      input.checked === false
    ) {
      input.classList.add("_error");
      error++;
    } else {
      if (input.value === "") {
        input.classList.add("_error");
        error++;
      }
    }
  }
  return error;
}
function emailValidate(emailValid) {
  // const re = /a-z0-9!#$%&"*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&"*+/=?^_`{|}~-]+)*@(?:[a-z0-9?\.)+a-z0-9?/;
  return re.test(String(emailValid.value).toLowerCase());
}
function serializeForm(formNode) {
  let error = formValidate(formNode);
  if (error === 0) {
    return new FormData(formNode);
  } else {
    alert("Vänligen fyll i de obligatoriska fälten.");
  }
}
async function handleFormSubmit(e) {
  e.preventDefault();
  const data = serializeForm(e.target);
  if (data === undefined) {
    console.log("No data");
  } else {
    toggleCover();
    const response = await sendData(data);
    if (response === undefined) {
      console.log("No response");
    } else {
      toggleCover();
      let result = await response.json();
      if (result.status) {
        if (e.target.id == "modalForm") {
          document.querySelector("[href='#close-modal-form']").click();
        }
        e.target.reset();
        alert(result.message);
      } else {
        alert(result.message);
      }
    }
  }
}
function toggleBtn() {
  if (modalBtn.classList.contains("_open")) {
    modalBtn.classList.remove("_open");
  } else {
    modalBtn.classList.add("_open");
  }
}

accept.addEventListener("click", () => {
  cookies.style.display = "none";
});
