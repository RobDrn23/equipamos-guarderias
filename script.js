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
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }


  // ==========================================
  // AÑO AUTOMÁTICO DEL FOOTER
  // ==========================================

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  // ==========================================
  // CARRUSEL PRINCIPAL
  // ==========================================

  const slider = document.querySelector(".hero-slider");

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


  // Si no existe el slider, no hacemos nada
  if (!slides.length) {
    return;
  }


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

      slide.classList.toggle(
        "active",
        i === current
      );

    });


    dots.forEach(function (dot, i) {

      dot.classList.toggle(
        "active",
        i === current
      );

    });

  }


  // ==========================================
  // INICIAR TEMPORIZADOR
  // ==========================================

  function startTimer() {

    stopTimer();

    timer = setInterval(function () {

      showSlide(current + 1);

    }, slideTime);

  }


  // ==========================================
  // DETENER TEMPORIZADOR
  // ==========================================

  function stopTimer() {

    if (timer !== null) {

      clearInterval(timer);

      timer = null;

    }

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
  // INDICADORES
  // ==========================================

  dots.forEach(function (dot, i) {

    dot.addEventListener("click", function () {

      showSlide(i);

      startTimer();

    });

  });


  // ==========================================
  // PAUSAR AL PASAR EL MOUSE
  // ==========================================

  if (slider) {

    slider.addEventListener(
      "mouseenter",
      function () {

        stopTimer();

      }
    );


    slider.addEventListener(
      "mouseleave",
      function () {

        startTimer();

      }
    );

  }


  // ==========================================
  // SOPORTE PARA CELULAR
  // ==========================================

  if (slider) {

    slider.addEventListener(
      "touchstart",
      function () {

        stopTimer();

      },
      { passive: true }
    );


    slider.addEventListener(
      "touchend",
      function () {

        startTimer();

      },
      { passive: true }
    );

  }


  // ==========================================
  // INICIAR CARRUSEL
  // ==========================================

  showSlide(0);

  startTimer();

});
/* ==========================================
   TRANSICIÓN SUAVE DEL CARRUSEL PRINCIPAL
   ========================================== */

.hero-slider .slide {
  transition:
    opacity 0.7s ease-in-out,
    transform 0.7s ease-in-out;
}

.hero-slider .slide.active {
  opacity: 1;
  transform: translateX(0);
}

.hero-slider .slide:not(.active) {
  opacity: 0;
}
