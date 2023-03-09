const headerContainer = document.getElementById("header-container");

const menu = document.getElementById("menu");
const dynamicMenu = document.getElementById("dynamicMenu");
const burger = document.querySelector(".burger");
const closeMenuTablet = document.getElementById("closeMenuTablet");

const servicesModal = document.getElementById("servicesModal");
const servicesMenu = document.getElementById("servicesMenu");
const backMenuServices = document.getElementById("backMenuServices");
const btnServices = document.getElementById("btnServices");
const dynamicMenuContainer = document.querySelector(".dynamicMenuContainer");

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

// ----  Close a menu tablet. ---
function burgerClose() {
  if (
    document
      .querySelector("header")
      .classList.contains("burger-paint-header-dark")
  ) {
    document
      .querySelector("header")
      .classList.remove("burger-paint-header-dark");
  }
  burger.classList.toggle("is-active");
  menuServicesClose();
  showMainHeader();
  unlockWrapper();
  closeDynamicMenu();
}

// ----  Open a menu tablet. ---
function burgerOpen() {
  if (document.querySelector("header").classList.contains("white-header")) {
    document.querySelector("header").classList.add("burger-paint-header-dark");
  }
  burger.classList.toggle("is-active");
  if (window.innerWidth >= 820) hideMainHeader();
  lockWrapper();
  if (document.getElementById("popupForms")) closePopupSentMsg();
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

closeMenuTablet.addEventListener("click", burgerClose);
burger.addEventListener("click", () => {
  menu.classList.contains("invisible") ? burgerOpen() : burgerClose();
});

// open services list in mobile menu
btnServices.addEventListener("click", menuServicesToggle);

// hide services list in mobile menu
backMenuServices.addEventListener("click", menuServicesToggle);

/**
 * Opens a Form from mobile menu .
 */
if (document.getElementById("btnContactTablet")) {
  document.getElementById("btnContactTablet").addEventListener("click", () => {
    openDynamicForm();
    menuServicesClose();
    lockWrapper();
    showMainHeader();
    if (document.getElementById("popupForms")) closePopupSentMsg();
    burger.classList.toggle("is-active");

    if (
      document.getElementById("menu") &&
      document.getElementById("dynamicMenu")
    )
      closeDynamicMenu();
  });
}
