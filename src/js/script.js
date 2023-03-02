var mainNav = document.querySelector("#mainNav");
const body = document.getElementsByTagName("body");
const modeBtn = document.querySelector("#mode");
const html = document.querySelector("html");
const wrapper = document.querySelector(".wrapper");
const cookies = document.getElementById("cookies");
const accept = document.getElementById("accept-btn");
const headerContainer = document.getElementById("header-container");

const mode = document.querySelector("#mode");
const darkBtn = document.querySelector("#darkBtn");
const lightBtn = document.querySelector("#lightBtn");
// const mode_02 = document.querySelector("#mode_02");
// const darkBtn_02 = document.querySelector("#darkBtn_02");
// const lightBtn_02 = document.querySelector("#lightBtn_02");

const menu = document.querySelector("#menu");
const burger = document.querySelector(".burger");

const closeMenuTablet = document.querySelector("#closeMenuTablet");
// Closes back-menu
// const backMenuServices = document.querySelector('#backMenuServices');
const servicesModal = document.querySelector("#servicesModal");
const servicesMenu = document.querySelector("#servicesMenu");

//  popup -sent- form header.
const popupForms = document.querySelector("#popup-forms");
const btnServices = document.querySelector("#btnServices");

const backMenuServices = document.querySelector("#backMenuServices");

const backdrop_01 = document.getElementById("backdrop_01");

const btnContact = document.getElementById("btnContact");
const btnFormMenu = document.getElementById("btnFormMenu");

const btnDiscuss = document.getElementById("btnDiscuss"); //======28.02.2023
const logoOpacity = document.getElementById("logo-opacity");
const submit = document.querySelector("#submit");
const btnClosePopupForms = document.querySelector("#btn-close-popup-forms");

// const btnContact_02 = document.querySelector('#btnContact_02');

const formMenu = document.querySelector("#formMenu");
const btnContactTablet = document.querySelector("#btnContactTablet");

function lockWrapper() {
  wrapper.classList.add("lock-wrapper");
}
function unlockWrapper() {
  wrapper.classList.remove("lock-wrapper");
}
function hideMainHeader() {
  headerContainer.classList.add("hidden");
  headerContainer.classList.remove("flex");
}
function showMainHeader() {
  headerContainer.classList.add("flex");
  headerContainer.classList.remove("hidden");
}

// ----- on window resize ------
window.addEventListener("resize", () => {
  if (window.innerWidth > 1280 && !menu.classList.contains("hidden")) {
    burgerClose();
  }
  if (window.innerWidth < 820 && !menu.classList.contains("hidden")) {
    showMainHeader();
  }
  if (window.innerWidth >= 820 && !menu.classList.contains("hidden")) {
    hideMainHeader();
  }
});
/**
 * Hiddens header to the scroll.
======================================= */
// ==========================================

// (function () {
//   "use strict"; // Start of use strict

//   // Show the navbar when the page is scrolled up
//   var MQL = 992;
//   var vw = Math.max(
//     document.documentElement.clientWidth || 0,
//     window.innerWidth || 0
//   );

//   //primary navigation slide-in effect
//   if (mainNav && vw > MQL) {
//     var headerHeight = mainNav.offsetHeight;
//     var previousTop = window.pageYOffset;

//     window.addEventListener("scroll", function (e) {
//       var currentTop = window.pageYOffset;

//       //check if user is scrolling up
//       if (currentTop < previousTop) {
//         //if scrolling up...
//         if (currentTop > 0 && mainNav.classList.contains("isFixed")) {
//           mainNav.classList.add("isVisible"); //navbar-shrink
//         } else {
//           mainNav.classList.remove("isVisible", "isFixed"); //navbar-shrink
//         }
//       } else if (currentTop > previousTop) {
//         //if scrolling down...
//         mainNav.classList.remove("isVisible"); //navbar-shrink

//         if (
//           currentTop > headerHeight &&
//           !mainNav.classList.contains("isFixed")
//         ) {
//           mainNav.classList.add("isFixed");
//         }
//       }
//       previousTop = currentTop;
//     });
//   }
// })();
// ---------- toggle header on scroll  ----------
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

  darkBtn_02.classList.add("hidden");
  lightBtn_02.classList.remove("hidden");
} else {
  document.documentElement.classList.remove("dark");
}

modeBtn.addEventListener("click", () => {
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    localStorage.theme = "dark";
    // localStorage.mode_02.darkBtn.classList = 'hidden';
  } else {
    localStorage.theme = "light";
  }
});

/**
 * Replaces button dark mode to light mode.
 */

function darkMode() {
  mode.addEventListener("click", () => {
    darkBtn.classList.toggle("hidden");

    lightBtn.classList.toggle("hidden");
    // menu.classList.toggle('flex');
  });
}
darkMode();

/**
 * Toggle dark mode-mobile.
 */

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

// const modeBtn_02 = document.querySelector("#mode_02");

// modeBtn_02.addEventListener("click", () => {
//   document.querySelector("html").classList.toggle("dark");

//   if (document.querySelector("html").classList.contains("dark")) {
//     localStorage.theme = "dark";
//   } else {
//     localStorage.theme = "light";
//   }
// });

/**
 * Replaces button dark mode to light mode.
 */

// function darkModeMobile() {
//   mode_02.addEventListener("click", () => {
//     darkBtn_02.classList.toggle("hidden");

//     lightBtn_02.classList.toggle("hidden");
//     // menu.classList.toggle('flex');
//   });
// }
// darkModeMobile();

/**
 * Added overflow-hidden to the wrapper.
 */

/**
 * Opens a menu.
 */

//  logo to the open menu
// const logoOpacity = document.querySelector('#logo-opacity');
function burgerOpen() {
  burger.classList.toggle("is-active");
  if (window.innerWidth >= 820) hideMainHeader();
  lockWrapper();
  menu.classList.toggle("hidden");
}

burger.addEventListener("click", burgerOpen);

// if(wrapper.classList.contains('overflow')){
//   return ;
// }
// ------------------------------------------------------------ igor >
// if (burger.classList.contains("is-active")) {
//   wrapper.classList.add("overflow");
// } else if (!burger.classList.contains("is-active")) {
//   wrapper.classList.remove("overflow");
// }
// ------------------------------------------------------------ igor <
/**
 * Added overflow-hidden to the wrapper
 */

//  wrapper.classList.toggle('overflow');

//  console.log('is-active');
// wrapper.classList.add('overflow');
// if(!'is-active') {
//   // return
//   wrapper.classList.remove('overflow');
// }else{
//   wrapper.classList.toggle('overflow');
// }

/**
 * Remove overflow-hidden to the wrapper
 */
//  wrapper.classList.remove('overflow');

/**
 * Closes back menu services.
 */
// Якщо відкрите меню сервісів,
//потрібно додати клас хіден
// ------------------------------------------------------------ igor >
// if (servicesModal.classList !== "hidden") {
//   servicesModal.classList.add("hidden");

//   servicesMenu.classList.remove("hidden");
// }
// ------------------------------------------------------------ igor <
/**
 * Close a popup -sent- form header.
 */
// ------------------------------------------------------------ igor>
// if (popupForms.classList !== "hidden") {
//   popupForms.classList.add("hidden");
// }
// ------------------------------------------------------------ igor<
/**
 * Opacity logo to the open menu.
 */
//  if(burger.classList === 'is-active'){
//   logoOpacity.classList.add('opacity');
// }

/**
 * Close a menu tablet.
 */
function burgerClose() {
  burger.classList.toggle("is-active");

  showMainHeader();
  unlockWrapper();
  menu.classList.toggle("hidden");
}
closeMenuTablet.addEventListener("click", burgerClose);

/**
 * Opens a menu services.
 */

btnServices.addEventListener("click", () => {
  servicesMenu.classList.toggle("hidden");

  servicesModal.classList.toggle("hidden");
  // menu.classList.toggle('flex');
});

/**
 * Back a menu services.
 */

backMenuServices.addEventListener("click", () => {
  servicesMenu.classList.toggle("hidden");

  servicesModal.classList.toggle("hidden");
});

/**
 * Opens a menu form mobile.
 */

// function formMenuFn() { -------------------------------------kill fn()
// btnContact.addEventListener('click', () => {
//   formMenu.classList.toggle('hidden');

//   burger.classList.toggle('is-active');
//   menu.classList.toggle('hidden');
// });

//  02
btnContact.addEventListener("click", (e) => {
  formMenu.classList.toggle("hidden");

  // console.log(burger.classList);
  // console.log(e.view.parent.document.body);
  // console.log(body.classList);

  // html.classList.add('overflow-hidden');

  // if(burger.classList === 'is-active') {
  //   // burger.classList.add('is-active');
  //   burger.classList.remove('is-active');

  //   menu.classList.add('hidden');
  // }
  lockWrapper();
  burger.classList.remove("is-active");
  menu.classList.add("hidden");

  /**
   * Closed the popup-form SENT.
   */
  // console.log(popupForms.classList);

  if (!popupForms.classList.contains("hidden")) {
    popupForms.classList.add("hidden");
    // popupForms.classList.remove('is-open');
  }
});

btnDiscuss.addEventListener("click", () => {
  formMenu.classList.toggle("hidden");
  lockWrapper();
});

btnFormMenu.addEventListener("click", () => {
  formMenu.classList.toggle("hidden");
  unlockWrapper();
  // if(burger.classList === 'is-active') {
  //   burger.classList.add('is-active');
  //   menu.classList.remove('hidden');
  // }
});

/**
 * Opens a menu form-tablet.
 */

btnContactTablet.addEventListener("click", () => {
  formMenu.classList.toggle("hidden");
  lockWrapper();
  showMainHeader();
  burger.classList.toggle("is-active");
  menu.classList.toggle("hidden");

  // burgerMenu()
});
// }
// formMenuFn(); --------------------------

/**
 * Opens a dropdown-header.
 */

// function openDropdown() {
//   const openDropdown = document.querySelector('#open-dropdown');
//   const dropdownHeader = document.querySelector('#dropdown-header');

//   openDropdown.addEventListener('click', () => {
//     dropdownHeader.classList.toggle('hidden');
//   });

//   /**
//    * Close a dropdown-header.
//    */

//   dropdownHeader.addEventListener('click', () => {
//     dropdownHeader.classList.toggle('hidden');
//   });
// }
// openDropdown();

/**
 * Opens a block services-06.
 */

function opensBlockServices() {
  let tl = document.querySelectorAll("#wrp-02 .title ");
  // console.log(tl);

  for (let i = 0; i < tl.length; i++) {
    tl[i].addEventListener("click", function (e) {
      // console.log(e.target.parentElement.nextElementSibling.className);

      if (this.classList.contains("t_active")) {
        this.classList.remove("t_active");
        this.lastElementChild.classList.remove("c_active");
        this.lastElementChild.classList.toggle("hidden");
      } else {
        tl.forEach((item) => {
          if (item.classList.contains("t_active")) {
            //  item.classList.remove("t_active");
            //  item.lastElementChild.classList.remove("c_active");
            // item.lastElementChild.classList.toggle("hidden")

            return;
          }
        });
        this.classList.add("t_active");
        this.lastElementChild.classList.add("c_active");
        this.lastElementChild.classList.toggle("hidden");
      }
    });
  }
}
opensBlockServices();

/**
 * Opens a support.
 */

// textRed.classList.replace('text-mainTextRed' ,'text-mainTextDark' )

function accordeonOpen() {
  let tl = document.querySelectorAll("#wrp .title ");

  for (let i = 0; i < tl.length; i++) {
    tl[i].addEventListener("click", function (e) {
      // console.log(e);
      // // console.log(e.target.firstElementChild.classList);
      // console.log(e.target.firstElementChild);
      // // console.log(e.target.nextElementSibling.classList);

      if (this.classList.contains("t_active")) {
        this.classList.remove("t_active");
        this.nextElementSibling.classList.remove("c_active");
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

            item.classList.remove("text-mainTextRed");
            item.classList.add("text-mainTextDark");

            item.classList.remove("dark:text-mainTextRed");
            item.classList.add("dark:text-mainTextDark");

            /**
             * Button
             */
            item.firstElementChild.classList.toggle("hidden");
            item.lastElementChild.classList.toggle("hidden");

            // .spoller-decor
            // item.firstElementChild.classList.toggle('c_active');

            return;
          }
        });
        this.classList.add("t_active");
        this.nextElementSibling.classList.add("c_active");

        /**
         * Title text color red
         */

        this.classList.remove("text-mainTextDark");
        this.classList.add("text-mainTextRed");

        this.classList.remove("dark:text-mainTextDark");
        this.classList.add("dark:text-mainTextRed");

        /**
         * Button
         */
        this.firstElementChild.classList.toggle("hidden");
        this.lastElementChild.classList.toggle("hidden");

        // .spoller-decor
        // this.firstElementChild.classList.add('c_active');
      }
    });
  }
}
accordeonOpen();

/**
 * Close a popup-forms.
 */

// const btnFormSkicka = document.querySelector('#btn-form-skicka');

// const formMenu = document.querySelector('#formMenu');

// btnFormSkicka.addEventListener

submit.addEventListener("click", () => {
  logoOpacity.classList.remove("opacity-0");
});

// submit.addEventListener('click', () =>{
//   popupForms.classList.toggle('hidden');
//   formMenu.classList.add('hidden');
// })

btnClosePopupForms.addEventListener("click", () => {
  popupForms.classList.add("hidden");
  popupForms.classList.remove("flex");

  unlockWrapper();
  /**
   * Remove atribute disabled for the wrapper element.
   */
  //  burger.removeAttribute('disabled', 'disabled');
});

/**
 * Send Mail.
 */

document.addEventListener("DOMContentLoaded", function () {
  const submit = document.getElementById("submit");
  const submit_02 = document.getElementById("submit_02");
  // popup-forms
  const popupForms = document.querySelector("#popup-forms");
  const formMenu = document.querySelector("#formMenu");

  // const burger = document.querySelector(".burger");

  /**
   * Validation input phone add popup.
   */

  const phone = document.querySelector("#phone");
  const popup = document.querySelector(".search");
  // const phone_02 = document.querySelector('#phone_02');  //=========28.02.2023
  // const popup_02 = document.querySelector('.search_02');

  phone.addEventListener("input", (e) => {
    let inputValue = phone.value;
    //   popup phone

    if (isNaN(inputValue)) {
      // console.log(e);
      // console.log(e.target.offsetParent.firstElementChild);
      // console.log(inputValue);
      // console.log(phone.classList.contains);

      /**
       * Added red border input phone
       */

      phone.classList.add("border__error");
      // phone.classList.replace('border__rounded','border__error');

      // phone.classList.replace('focus:border-white','focus:border-borderBtn');
      phone.classList.add("focus:border-borderBtn");
      phone.classList.add("_error");

      popup.classList.replace("hidden", "block");
      // popup.classList.toggle('hidden');

      // popup.classList.add('block');
      popup.textContent = "The phone is in the wrong format";
      // setTimeout(() => {
      //   popup.textContent = '';
      //   popup.classList.remove('block');
      //   popup.classList.add('hidden');
      // }, 2000);

      return;
    } else {
      popup.textContent = "";
      popup.classList.remove("block");
      popup.classList.add("hidden");

      /**
       * Delete red border input phone
       */

      phone.classList.remove("border__error");

      phone.classList.remove("focus:border-borderBtn");
      phone.classList.remove("border-borderBtn");

      phone.classList.remove("_error");
    }
  });

  /**
   * Validation input phone add popup_02.
   */

  // phone_02.addEventListener('input', () => {    //===========28.02.2023
  //   let inputValue_02 = phone_02.value;
  //   //   popup phone_02

  //   if (isNaN(inputValue_02)) {

  //     /**
  //      * Added red border input phone
  //      */

  //      phone_02.classList.add('border__error');
  //     // phone.classList.replace('border__rounded','border__error');

  //      // phone.classList.replace('focus:border-white','focus:border-borderBtn');
  //     phone_02.classList.add('focus:border-borderBtn');
  //     phone_02.classList.add('_error');

  //     popup_02.classList.replace('hidden', 'block');
  //     popup_02.textContent = 'The phone is in the wrong format';

  //     return;
  //   }else {
  //       popup_02.textContent = '';
  //       popup_02.classList.remove('block');
  //       popup_02.classList.add('hidden');

  //       /**
  //        * Delete red border input phone
  //        */
  //        phone_02.classList.remove('border__error');

  //       phone_02.classList.remove('focus:border-borderBtn');
  //       phone_02.classList.remove('border-borderBtn');

  //     phone_02.classList.remove('_error');
  //   }
  // });
  // ===

  submit.addEventListener("click", (e) => {
    e.preventDefault();

    /**
     * Delete popup form.
     */
    popup.textContent = "";
    popup.classList.remove("block");
    popup.classList.add("hidden");

    /**
     * Added atribute disabled for the wrapper element.
     */
    // burger.setAttribute('disabled', 'disabled');

    // console.log(phone.value);

    if (
      name.value == "" ||
      email.value == "" ||
      phone.value == "" ||
      company.value == "" ||
      message.value == ""
    ) {
      alert("Please fill in all fields");
      return false;
    } else {
      // sendMail();
      // closePopupForm();

      popupForms.classList.remove("hidden");
      popupForms.classList.add("flex");
      // popupForms.classList.add('is-open');

      formMenu.classList.add("hidden");

      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("company").value = "";
      document.getElementById("message").value = "";
      document.getElementById("choise").value = "";

      // alert('Yuor message sent successfully');
    }
  });

  /**
   * Submit form -02.
   */
  //  submit_02.addEventListener('click', (e) => {   //=======28.02.2023
  //   e.preventDefault();

  //   /**
  //    * Delete popup form_02.
  //    */
  //    popup_02.textContent = '';
  //    popup_02.classList.remove('block');
  //    popup_02.classList.add('hidden');

  //   // console.log(phone.value);

  //   if (
  //     name_02.value == '' ||
  //     email_02.value == '' ||
  //     phone_02.value == '' ||
  //     company_02.value == '' ||
  //     message_02.value == ''
  //   ) {
  //     alert('Please fill in all fields');
  //     return false;
  //   } else {
  //     // sendMail();
  //     // closePopupForm();

  //     popupForms.classList.toggle('hidden');
  //     // popupForms.classList.add('is-open');

  //     // disabled 27.02.2023
  //     // formMenu.classList.add('hidden');

  //     document.getElementById('name_02').value = '';
  //       document.getElementById('email_02').value = '';
  //       document.getElementById('phone_02').value = '';
  //       document.getElementById('company_02').value = '';
  //       document.getElementById('message_02').value = '';
  //       document.getElementById('choise_02').value = '';

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
 * Added class hidden at open backdrop to the logo header
 */

// function logoHidden() {
// console.log(backdrop_01.classList);
// --------------------------------------------------------------- kill
// if (backdrop_01.classList !== "") {
//   burger.addEventListener("click", (e) => {
//     // console.log(e);
//     logoOpacity.classList.add("opacity-0");
//   });
// }
// btnContact.addEventListener("click", () => {
//   // console.log(logoOpacity.classList);
//   logoOpacity.classList.add("opacity-0");
// });
// btnFormMenu.addEventListener("click", () => {
//   logoOpacity.classList.remove("opacity-0");
// });
// closeMenuTablet.addEventListener("click", () => {
//   logoOpacity.classList.remove("opacity-0");
// });
// =========28.02.2023
// btnDiscuss.addEventListener('click', () =>{
//   logoOpacity.classList.add('opacity-0')
// });
// }
// logoHidden();

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
