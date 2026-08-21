document.addEventListener("DOMContentLoaded", function () {

  // ==========================================
  // MENÚ MÓVIL
  // ==========================================

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (menuToggle && nav) {

    menuToggle.addEventListener("click", function () {

      const open = nav.classList.toggle("open");

      menuToggle.setAttribute(
        "aria-expanded",
        open ? "true" : "false"
      );

    });

    nav.querySelectorAll("a").forEach(function (link) {

      link.addEventListener("click", function () {

        nav.classList.remove("open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

      });

    });

  }


  // ==========================================
  // AÑO DEL FOOTER
  // ==========================================

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  // ==========================================
  // CARRUSEL PRINCIPAL
  // ==========================================

  const slides = document.querySelectorAll(
    ".hero-slider .slide"
  );

  const dots = document.querySelectorAll(
    ".hero-slider .slider-dots button"
  );

  const prev = document.querySelector(
    ".hero-slider .slider-prev"
  );

  const next = document.querySelector(
    ".hero-slider .slider-next"
  );


  // ==========================================
  // COMPROBAR SLIDES
  // ==========================================

  if (slides.length === 0) {
    console.log("Carrusel: no se encontraron slides");
    return;
  }


  console.log(
    "Carrusel iniciado:",
    slides.length,
    "slides"
  );


  // ==========================================
  // CONFIGURACIÓN
  // ==========================================

  let current = 0;

  let timer = null;

  const slideTime = 5000;


  // ==========================================
  // MOSTRAR SLIDE
  // ==========================================

  function showSlide(index) {

    current =
      (index + slides.length) % slides.length;


    slides.forEach(function (slide, i) {

      if (i === current) {

        slide.classList.add("active");

      } else {

        slide.classList.remove("active");

      }

    });


    dots.forEach(function (dot, i) {

      if (i === current) {

        dot.classList.add("active");

      } else {

        dot.classList.remove("active");

      }

    });


    console.log(
      "Carrusel → Slide",
      current + 1
    );

  }


  // ==========================================
  // TEMPORIZADOR
  // ==========================================

  function startTimer() {

    if (timer !== null) {

      clearInterval(timer);

    }


    timer = setInterval(function () {

      showSlide(current + 1);

    }, slideTime);

  }


  // ==========================================
  // FLECHA ANTERIOR
  // ==========================================

  if (prev) {

    prev.addEventListener("click", function () {

      showSlide(current - 1);

      startTimer();

    });

  }


  // ==========================================
  // FLECHA SIGUIENTE
  // ==========================================

  if (next) {

    next.addEventListener("click", function () {

      showSlide(current + 1);

      startTimer();

    });

  }


  // ==========================================
  // PUNTOS
  // ==========================================

  dots.forEach(function (dot, index) {

    dot.addEventListener("click", function () {

      showSlide(index);

      startTimer();

    });

  });


  // ==========================================
  // INICIAR
  // ==========================================

  showSlide(0);

  startTimer();

});
