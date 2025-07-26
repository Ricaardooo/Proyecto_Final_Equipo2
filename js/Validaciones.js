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