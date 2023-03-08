const body = document.getElementsByTagName("body");
const html = document.querySelector("html");
const wrapper = document.querySelector(".wrapper");
const mainNav = document.getElementById("mainNav");

//  popup after form successfuly -sent-
const popupForms = document.getElementById("popupForms");

//=============== functions ===============

function lockWrapper() {
  wrapper.classList.add("lock-wrapper");
}
function unlockWrapper() {
  wrapper.classList.remove("lock-wrapper");
}

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

if (document.getElementById("btnClosePopupForms"))
  document
    .getElementById("btnClosePopupForms")
    .addEventListener("click", () => {
      closePopupSentMsg();
      unlockWrapper();
    });

// ======== below NOT using===============
// ======== below NOT using===============
// ======== below NOT using===============
// ======== below NOT using===============

/**
 * Send Mail.
 */

/**
 * Send mail-02
 */

// function toggleCover() {
//   const cover = document.getElementById("cover");
//   if (cover.classList.contains("_sending")) {
//     cover.classList.remove("_sending");
//   } else {
//     cover.classList.add("_sending");
//   }
// }
// async function sendData(data) {
//   return await fetch(window.location.href, { method: "POST", body: data });
// }
// function formValidate(formValid) {
//   let error = 0;
//   let formReq = formValid.querySelectorAll("._req");
//   for (let i = 0; i < formReq.length; i++) {
//     const input = formReq[i];
//     input.classList.remove("_error");
//     if (input.classList.contains("_email")) {
//       if (!emailValidate(input)) {
//         input.classList.add("_error");
//         error++;
//       }
//     } else if (
//       input.getAttribute("type") === "checkbox" &&
//       input.checked === false
//     ) {
//       input.classList.add("_error");
//       error++;
//     } else {
//       if (input.value === "") {
//         input.classList.add("_error");
//         error++;
//       }
//     }
//   }
//   return error;
// }
// function emailValidate(emailValid) {
//   // const re = /a-z0-9!#$%&"*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&"*+/=?^_`{|}~-]+)*@(?:[a-z0-9?\.)+a-z0-9?/;
//   return re.test(String(emailValid.value).toLowerCase());
// }
// function serializeForm(formNode) {
//   let error = formValidate(formNode);
//   if (error === 0) {
//     return new FormData(formNode);
//   } else {
//     alert("Vänligen fyll i de obligatoriska fälten.");
//   }
// }
// async function handleFormSubmit(e) {
//   e.preventDefault();
//   const data = serializeForm(e.target);
//   if (data === undefined) {
//     console.log("No data");
//   } else {
//     toggleCover();
//     const response = await sendData(data);
//     if (response === undefined) {
//       console.log("No response");
//     } else {
//       toggleCover();
//       let result = await response.json();
//       if (result.status) {
//         if (e.target.id == "modalForm") {
//           document.querySelector("[href='#close-modal-form']").click();
//         }
//         e.target.reset();
//         alert(result.message);
//       } else {
//         alert(result.message);
//       }
//     }
//   }
// }
// function toggleBtn() {
//   if (modalBtn.classList.contains("_open")) {
//     modalBtn.classList.remove("_open");
//   } else {
//     modalBtn.classList.add("_open");
//   }
// }
