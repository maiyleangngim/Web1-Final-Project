const menuBtn = document.getElementById("menu-btn");
const menuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.getElementById("mobile-menu");

let isMenuOpen = false;

function toggleMenu() {
  isMenuOpen = !isMenuOpen;

  mobileMenu.classList.toggle("active", isMenuOpen);

  menuIcon.classList.toggle("fa-bars", !isMenuOpen);
  menuIcon.classList.toggle("fa-xmark", isMenuOpen);
}

menuBtn.addEventListener("click", toggleMenu);