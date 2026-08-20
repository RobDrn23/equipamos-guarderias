document.addEventListener("DOMContentLoaded", function () {
  // Menú móvil
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      const open = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
      });
    });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Carrusel principal
  const slides = document.querySelectorAll(".hero-slider .slide");
  const dots = document.querySelectorAll(".hero-slider .slider-dots button");
  const prev = document.querySelector(".hero-slider .slider-prev");
  const next = document.querySelector(".hero-slider .slider-next");

  if (!slides.length) return;

  let current = 0;
  let timer = null;

  function showSlide(index) {
    current = (index + slides.length) % slides.length;

    slides.forEach(function (slide, i) {
      slide.classList.toggle("active", i === current);
    });

    dots.forEach(function (dot, i) {
      dot.classList.toggle("active", i === current);
    });
  }

  function restartTimer() {
    if (timer) clearInterval(timer);

    timer = setInterval(function () {
      showSlide(current + 1);
    }, 5000);
  }

  if (prev) {
    prev.addEventListener("click", function () {
      showSlide(current - 1);
      restartTimer();
    });
  }

  if (next) {
    next.addEventListener("click", function () {
      showSlide(current + 1);
      restartTimer();
    });
  }

  dots.forEach(function (dot, i) {
    dot.addEventListener("click", function () {
      showSlide(i);
      restartTimer();
    });
  });

  // Iniciar inmediatamente
  showSlide(0);
  restartTimer();
});
