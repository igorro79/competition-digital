const mainNav = document.getElementById("mainNav");
const body = document.getElementsByTagName("body");
const modeBtn = document.querySelector("#mode");
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

const dynamicForm = document.getElementById("dynamicForm");
const mainForm = document.getElementById("mainForm");

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
  console.log("open");
  popupForms.classList.add("flex");
  popupForms.classList.remove("hidden");
};
const closePopupSentMsg = () => {
  console.log("close1");
  if (!popupForms.classList.contains("hidden")) {
    console.log("close2");

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
/*
 * Close a menu tablet.
 */
function burgerClose() {
  burger.classList.toggle("is-active");
  menuServicesClose();
  showMainHeader();
  unlockWrapper();
  closeDynamicMenu();
}

function burgerOpen() {
  burger.classList.toggle("is-active");
  if (window.innerWidth >= 820) hideMainHeader();
  lockWrapper();
  closePopupSentMsg();
  openDynamicMenu();
}

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

modeBtn.addEventListener("click", () => {
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
});

/**
 * Replaces button dark mode to light mode.
 */
mode.addEventListener("click", () => {
  darkBtn.classList.toggle("hidden");
  lightBtn.classList.toggle("hidden");
});

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

btnServices.addEventListener("click", menuServicesToggle);

/**
 * Back a menu services.
 */

backMenuServices.addEventListener("click", menuServicesToggle);

/**
 * Opens a menu form mobile.
 */

//  02
btnContact.addEventListener("click", () => {
  if (burger.classList.contains("is-active")) burgerClose();
  lockWrapper();
  openDynamicForm();
  burger.classList.remove("is-active");

  /**
   * Closed the popup-form SENT.
   */

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
 * Opens a block services-06.
 */

function opensBlockServices() {
  let tl = document.querySelectorAll("#servicesCardsWrp .title ");

  for (let i = 0; i < tl.length; i++) {
    tl[i].addEventListener("click", function (e) {
      if (window.innerWidth < 820 && e.target.nodeName === "H3") {
        e.preventDefault();
      }
      console.log(e.target);
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
 * Opens a support.
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

        // .spoller-decor
        //  this.firstElementChild.classList.add('c_active');
      } else {
        tl.forEach((item) => {
          if (item.classList.contains("t_active")) {
            item.classList.remove("t_active");
            item.nextElementSibling.classList.remove("c_active");

            /**
             * Title text color red
             */

            item.classList.remove("text-main");
            item.classList.add("text-dark");

            item.classList.remove("dark:text-main");
            item.classList.add("dark:text-white");

            /**
             * Button
             */
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

/**
 * Close a popup-forms.
 */

// submit.addEventListener("click", () => {
//   logoOpacity.classList.remove("opacity-0");
// });

btnClosePopupForms.addEventListener("click", () => {
  closePopupSentMsg();
  unlockWrapper();
  //------------------------------------------------------------------
});

/**
 * Send Mail.
 */

document.addEventListener("DOMContentLoaded", function () {
  const submit = document.getElementById("submit");
  const submit_02 = document.getElementById("submit_02");
  //---------------------------------------------
  const username = document.getElementById("username");
  const username_02 = document.getElementById("username_02");

  const email = document.getElementById("email");
  const email_02 = document.getElementById("email_02");

  const phone = document.getElementById("phone");
  const phone_02 = document.getElementById("phone_02");

  const company = document.getElementById("company");
  const company_02 = document.getElementById("company_02");

  /**
   * Added popup
   */
  const popup_username = document.querySelector(".username");
  const popup_username_02 = document.querySelector(".username_02");

  const popup_email = document.querySelector(".popup_email");
  const popup_email_02 = document.querySelector(".popup_email_02");

  const popup_phone = document.querySelector(".popup_phone");
  const popup_phone_02 = document.querySelector(".popup_phone_02");

  const popup_company = document.querySelector(".popup_company");
  const popup_company_02 = document.querySelector(".popup_company_02");

  // function validatePhone() {
  //   let inputValue = phone_02.value;

  //   if (inputValue.length < 3) {
  //     /**
  //      * Added red border input phone_02
  //      */
  //     phone_02.classList.add("border__error");
  //     phone_02.classList.add("focus:border-borderBtn");
  //     phone_02.classList.add("_error");
  //     popup_phone.classList.replace("hidden", "block");
  //     popup_phone.textContent = "The phone is in the wrong format";
  //     return;
  //   } else {
  //     popup_phone.textContent = "";
  //     popup_phone.classList.remove("block");
  //     popup_phone.classList.add("hidden");
  //     /**
  //      * Delete red border input phone
  //      */
  //     phone_02.classList.remove("border__error");
  //     phone_02.classList.remove("focus:border-borderBtn");
  //     phone_02.classList.remove("border-borderBtn");
  //     phone_02.classList.remove("_error");
  //   }
  // }

  phone.addEventListener("blur", () => {
    let inputValue = phone.value;

    if (inputValue.length < 3) {
      /**
       * Added red border input phone
       */
      phone.classList.add("border__error");
      phone.classList.add("focus:border-borderBtn");
      phone.classList.add("_error");
      popup_phone.classList.replace("hidden", "block");
      popup_phone.textContent = "The phone is in the wrong format";
      return;
    } else {
      popup_phone.textContent = "";
      popup_phone.classList.remove("block");
      popup_phone.classList.add("hidden");
      /**
       * Delete red border input phone
       */
      phone.classList.remove("border__error");
      phone.classList.remove("focus:border-borderBtn");
      phone.classList.remove("border-borderBtn");
      phone.classList.remove("_error");
    }
  });

  phone_02.addEventListener("blur", () => {
    let inputValue = phone_02.value;

    if (inputValue.length < 3) {
      /**
       * Added red border input phone_02
       */
      phone_02.classList.add("border__error");
      phone_02.classList.add("focus:border-borderBtn");
      phone_02.classList.add("_error");
      popup_phone_02.classList.replace("hidden", "block");
      popup_phone_02.textContent = "The phone is in the wrong format";
      return;
    } else {
      popup_phone_02.textContent = "";
      popup_phone_02.classList.remove("block");
      popup_phone_02.classList.add("hidden");
      /**
       * Delete red border input phone
       */
      phone_02.classList.remove("border__error");
      phone_02.classList.remove("focus:border-borderBtn");
      phone_02.classList.remove("border-borderBtn");
      phone_02.classList.remove("_error");
    }
  });
  // phone_02.addEventListener("blur", validatePhone);

  /*===============================
  BEGIN: form-02  before footer
  ===============================*/
  dynamicForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (
      username.value.trim() == "" ||
      email.value.trim() == "" ||
      phone.value.trim() == "" ||
      company.value.trim() == ""
    ) {
      return;
    } else {
      // sendMail();

      openPopupSentMsg();
      closeDynamicForm();

      const formData = new FormData(dynamicForm);
      console.log(Object.fromEntries(formData));

      dynamicForm.reset();
      // document.getElementById("username").value = "";
      // document.getElementById("email").value = "";
      // document.getElementById("phone").value = "";
      // document.getElementById("company").value = "";
      // document.getElementById("message").value = "";
      // document.getElementById("choise").value = "";

      // alert('Yuor message sent successfully');
    }
  });
  mainForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (
      username_02.value.trim() == "" ||
      email_02.value.trim() == "" ||
      phone_02.value.trim() == "" ||
      company_02.value.trim() == ""
    ) {
      return;
    } else {
      // sendMail();

      openPopupSentMsg();
      closeDynamicForm();

      const formData = new FormData(mainForm);
      console.log(Object.fromEntries(formData));

      mainForm.reset();
      // document.getElementById("username").value = "";
      // document.getElementById("email").value = "";
      // document.getElementById("phone").value = "";
      // document.getElementById("company").value = "";
      // document.getElementById("message").value = "";
      // document.getElementById("choise").value = "";

      // alert('Yuor message sent successfully');
    }
  });

  /*===========================================*/
  /**
   * Submit form -02.
   */
  /*===========================================*/
  // submit_02.addEventListener("click", (e) => {
  //   //=======28.02.2023
  //   e.preventDefault();

  //   /**
  //    * Delete popup form_02.
  //    */
  //   popup_name_02.textContent = "";
  //   popup_name_02.classList.remove("block");
  //   popup_name_02.classList.add("hidden");

  //   /**
  //    * Delete popup form_02.
  //    */
  //   popup_02.textContent = "";
  //   popup_02.classList.remove("block");
  //   popup_02.classList.add("hidden");

  //   // console.log(phone.value);

  //   if (
  //     name_02.value == "" ||
  //     email_02.value == "" ||
  //     phone_02.value == "" ||
  //     company_02.value == "" ||
  //     message_02.value == ""
  //   ) {
  //     // alert("Please fill in all fields");
  //     return false;
  //   } else {
  //     // sendMail();

  //     openPopupSentMsg();

  //     document.getElementById("name_02").value = "";
  //     document.getElementById("email_02").value = "";
  //     document.getElementById("phone_02").value = "";
  //     document.getElementById("company_02").value = "";
  //     document.getElementById("message_02").value = "";
  //     document.getElementById("choise_02").value = "";

  //     // alert('Yuor message sent successfully');
  //   }
  // });
});

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
// const modalBtn = document.getElementById("btn-modal-form");
// modalBtn.addEventListener("click", toggleBtn);
// const closeBtn = document.getElementById("close-modal-form");
// closeBtn.addEventListener("click", toggleBtn);
// const modalForm = document.getElementById("modalForm");
// modalForm.addEventListener("submit", handleFormSubmit);
// if (window.location.href.split("#")[1] === "modal-form") {
//   toggleBtn();
// }

// _req викорисовуєтьс для обов'язкових полів
// _error використовується для підсвічування помилок

/**
 * Closed consent-popup cookies.
 */

// function closedConsentPopup (){
//   const consentPopup = document.getElementById('consent-popup');        //=====28.02.2023
//   const accept = document.getElementById('accept');

//   accept.addEventListener('click', (e) =>{
//       consentPopup.classList.add('opacity-0')
//      })

// }
// closedConsentPopup ()

accept.addEventListener("click", () => {
  cookies.style.display = "none";
});
