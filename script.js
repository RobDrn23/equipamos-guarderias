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
  if (slides.length) {

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
    // DETENER TEMPORIZADOR
    // ==========================================

    function stopTimer() {

      if (timer !== null) {

        clearInterval(timer);

        timer = null;

      }

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

  }


  // ==========================================
  // FORMULARIO DE COTIZACIÓN
  // ==========================================

  const contactForm =
    document.querySelector(".contact-form");


  if (contactForm) {

    contactForm.addEventListener(
      "submit",
      function (event) {

        event.preventDefault();


        // ======================================
        // DATOS DEL FORMULARIO
        // ======================================

        const nombre =
          contactForm.querySelector(
            'input[placeholder="Tu nombre"]'
          );

        const empresa =
          contactForm.querySelector(
            'input[placeholder="Nombre de la guardería o empresa"]'
          );

        const necesidad =
          contactForm.querySelector(
            "textarea"
          );


        // ======================================
        // OBTENER VALORES
        // ======================================

        const nombreValue =
          nombre ? nombre.value.trim() : "";

        const empresaValue =
          empresa ? empresa.value.trim() : "";

        const necesidadValue =
          necesidad ? necesidad.value.trim() : "";


        // ======================================
        // VALIDACIÓN
        // ======================================

        if (!nombreValue) {

          alert("Por favor escribe tu nombre.");

          if (nombre) {
            nombre.focus();
          }

          return;

        }


        if (!empresaValue) {

          alert(
            "Por favor escribe el nombre de la guardería o empresa."
          );

          if (empresa) {
            empresa.focus();
          }

          return;

        }


        if (!necesidadValue) {

          alert(
            "Por favor cuéntanos qué necesitas."
          );

          if (necesidad) {
            necesidad.focus();
          }

          return;

        }


        // ======================================
        // NÚMERO DE WHATSAPP
        // ======================================
        //
        // AQUÍ COLOCAREMOS EL NÚMERO COMERCIAL
        // EN FORMATO INTERNACIONAL.
        //
        // Ejemplo México:
        //
        // const whatsappNumber = "526141234567";
        //
        // ======================================

     const whatsappNumber = "524491112789";


        // ======================================
        // MENSAJE
        // ======================================

     const message =
    "Hola, quiero solicitar una cotización.%0A%0A" +
    "*Nombre:* " +
    encodeURIComponent(nombreValue) +
    "%0A" +
    "*Guardería / Empresa:* " +
    encodeURIComponent(empresaValue) +
    "%0A" +
    "*¿Qué necesito?:* " +
    encodeURIComponent(necesidadValue) +
    "%0A%0A" +
    "Equipamos Guarderías";


        // ======================================
        // ABRIR WHATSAPP
        // ======================================
 
        if (whatsappNumber === "XXXXXXXXXX") {

          alert(
            "El formulario funciona correctamente. " +
            "Solo falta configurar el número de WhatsApp comercial."
          );

          return;

        }


        const whatsappURL =
          "https://wa.me/" +
          whatsappNumber +
          "?text=" +
          message;


        window.open(
          whatsappURL,
          "_blank"
        );

      }
    );

  }

});
/* =========================================================
   BOTÓN WHATSAPP - IR AL FORMULARIO
   ========================================================= */

.whatsapp-form-button {
  position: fixed;
  right: 22px;
  bottom: 22px;
  width: 58px;
  height: 58px;
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #25D366;
  color: white;

  border-radius: 50%;
  text-decoration: none;

  box-shadow: 0 6px 18px rgba(0, 0, 0, .25);

  transition:
    transform .2s ease,
    box-shadow .2s ease;
}

.whatsapp-form-button:hover {
  transform: scale(1.08);
  box-shadow: 0 8px 22px rgba(0, 0, 0, .30);
}

.whatsapp-icon {
  font-size: 28px;
  font-weight: 700;
  line-height: 1;
}

/* CELULAR */

@media (max-width: 600px) {

  .whatsapp-form-button {
    right: 16px;
    bottom: 16px;
    width: 54px;
    height: 54px;
  }

  .whatsapp-icon {
    font-size: 26px;
  }

}
