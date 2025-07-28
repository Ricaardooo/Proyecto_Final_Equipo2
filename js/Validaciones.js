document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".formulario form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        let nombre = document.getElementById("txtNombre").value.trim();
        let email = document.getElementById("txtEmail").value.trim();
        let asunto = document.getElementById("txtAsunto").value.trim();
        let mensaje = document.getElementById("txtMensaje").value.trim();
        let errores = [];

        
        if (nombre.length < 3) {
            errores.push("El nombre debe tener al menos  caracteres.");
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            errores.push("El correo electrónico es incorrecto.");
        }
        if (asunto.length < 3) {
            errores.push("El asunto debe tener al menos 3 caracteres.");
        }

        if (mensaje.length < 5) {
            errores.push("El mensaje debe tener al menos 5 caracteres.");
        }

        if (errores.length > 0) {
            e.preventDefault();
            alert(errores.join("\n"));
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const elementosAnimar = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    elementosAnimar.forEach(el => observer.observe(el));
});

function mostrarDescripcion(id) {
    const parrafo = document.getElementById(id);
    parrafo.classList.toggle("visible");
}

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.carousel-socialmedia');
    if (!carousel) return;

    const items = document.querySelectorAll('.carousel-socialmedia .carousel-item');
    let currentIndex = 0;
    const totalItems = items.length;

    document.querySelector('.carousel-button.next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    });

    document.querySelector('.carousel-button.prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    });

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const fotoCarousel = document.querySelector('.carousel-fotografia');
    if (!fotoCarousel) return;

    const fotoItems = document.querySelectorAll('.carousel-fotografia .carousel-item');
    let fotoIndex = 0;
    const totalFotos = fotoItems.length;

    document.querySelector('.carousel-button-foto.next').addEventListener('click', () => {
        fotoIndex = (fotoIndex + 1) % totalFotos;
        updateFotoCarousel();
    });

    document.querySelector('.carousel-button-foto.prev').addEventListener('click', () => {
        fotoIndex = (fotoIndex - 1 + totalFotos) % totalFotos;
        updateFotoCarousel();
    });

    function updateFotoCarousel() {
        const offset = -fotoIndex * 100;
        fotoCarousel.style.transform = `translateX(${offset}%)`;
    }
});


document.addEventListener("DOMContentLoaded", function () {
  const carousels = document.querySelectorAll(".carousel-produccion-container");

  carousels.forEach(carousel => {
    const track = carousel.querySelector(".carousel-produccion");
    const items = carousel.querySelectorAll(".carousel-item");
    const prevBtn = carousel.querySelector(".carousel-button.prev");
    const nextBtn = carousel.querySelector(".carousel-button.next");

    let index = 0;

    function updateCarousel() {
      track.style.transform = `translateX(-${index * 100}%)`;
    }

    function moveNext() {
      index = (index + 1) % items.length;
      updateCarousel();
    }

    prevBtn.addEventListener("click", () => {
      index = (index === 0) ? items.length - 1 : index - 1;
      updateCarousel();
    });

    nextBtn.addEventListener("click", () => {
      index = (index === items.length - 1) ? 0 : index + 1;
      updateCarousel();
    });

    setInterval(moveNext, 3000);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const carousels = document.querySelectorAll(".carousel-marketing-container");

  carousels.forEach(carousel => {
    const track = carousel.querySelector(".carousel-marketing");
    const items = carousel.querySelectorAll(".carousel-item");
    const prevBtn = carousel.querySelector(".carousel-button.prev");
    const nextBtn = carousel.querySelector(".carousel-button.next");

    let index = 0;

    function updateCarousel() {
      track.style.transform = `translateX(-${index * 100}%)`;
    }

    function moveNext() {
      index = (index + 1) % items.length;
      updateCarousel();
    }

    prevBtn.addEventListener("click", () => {
      index = (index === 0) ? items.length - 1 : index - 1;
      updateCarousel();
    });

    nextBtn.addEventListener("click", () => {
      index = (index + 1) % items.length;
      updateCarousel();
    });

    setInterval(moveNext, 3000); 
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const carousels = document.querySelectorAll(".carousel-diseno-container");

  carousels.forEach(carousel => {
    const track = carousel.querySelector(".carousel-diseno");
    const items = carousel.querySelectorAll(".carousel-item");
    const prevBtn = carousel.querySelector(".carousel-button.prev");
    const nextBtn = carousel.querySelector(".carousel-button.next");

    let index = 0;

    function updateCarousel() {
      track.style.transform = `translateX(-${index * 100}%)`;
    }

    function moveNext() {
      index = (index + 1) % items.length;
      updateCarousel();
    }

    prevBtn.addEventListener("click", () => {
      index = (index === 0) ? items.length - 1 : index - 1;
      updateCarousel();
    });

    nextBtn.addEventListener("click", () => {
      index = (index + 1) % items.length;
      updateCarousel();
    });

    setInterval(moveNext, 3000); 
  });
});



