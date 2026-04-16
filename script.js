window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0)";
  } else {
    navbar.style.background = "transparent";
  }
  
});

const gradient = document.querySelector(".scroll-gradient");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // adjust angka sesuai feel
  if (scrollY > 200) {
    gradient.style.opacity = 1;
  } else {
    gradient.style.opacity = scrollY / 200;
  }
});

const items = document.querySelectorAll(".work-item");
const preview = document.querySelector(".work-preview");

items.forEach(item => {
  item.addEventListener("mouseenter", () => {
    const img = item.getAttribute("data-img");
    preview.style.backgroundImage = `url(${img})`;
    preview.style.opacity = 1;
  });

  item.addEventListener("mouseleave", () => {
    preview.style.opacity = 0;
  });
});


const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});