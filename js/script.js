// ========================================
// BORICUA TECH STORE
// JavaScript principal del sitio web
// ========================================

// Espera hasta que todo el contenido HTML esté cargado
document.addEventListener("DOMContentLoaded", function () {

    // Selecciona todos los botones de "Ver detalles"
    const botonesDetalles = document.querySelectorAll(".ver-detalles");

    // Agrega un evento de clic a cada botón
    botonesDetalles.forEach(function (boton) {

        boton.addEventListener("click", function () {

            // Busca el nombre del producto dentro de la misma tarjeta
            const tarjeta = boton.closest(".card");
            const nombreProducto = tarjeta.querySelector(".card-title").textContent;

            // Muestra información del producto
            alert(
                "Producto seleccionado: " +
                nombreProducto +
                "\n\nPróximamente podrás encontrar más información sobre este producto."
            );

        });

    });

});
// ========================================
// VALIDACIÓN DEL FORMULARIO DE CONTACTO
// ========================================

const formulario = document.getElementById("formContacto");

if (formulario) {

    const nombre = document.getElementById("nombre");
    const correo = document.getElementById("correo");
    const asunto = document.getElementById("asunto");
    const mensaje = document.getElementById("mensaje");

    const errorNombre = document.getElementById("errorNombre");
    const errorCorreo = document.getElementById("errorCorreo");
    const errorAsunto = document.getElementById("errorAsunto");
    const errorMensaje = document.getElementById("errorMensaje");
    const mensajeExito = document.getElementById("mensajeExito");


    // Validar nombre mientras el usuario escribe
    nombre.addEventListener("input", function () {

        if (nombre.value.trim().length < 3) {
            errorNombre.textContent =
                "El nombre debe tener al menos 3 caracteres.";

            nombre.classList.add("is-invalid");
            nombre.classList.remove("is-valid");

        } else {
            errorNombre.textContent = "";

            nombre.classList.remove("is-invalid");
            nombre.classList.add("is-valid");
        }

    });


    // Validar correo electrónico en tiempo real
    correo.addEventListener("input", function () {

        const expresionCorreo =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!expresionCorreo.test(correo.value.trim())) {

            errorCorreo.textContent =
                "Escribe un correo electrónico válido.";

            correo.classList.add("is-invalid");
            correo.classList.remove("is-valid");

        } else {

            errorCorreo.textContent = "";

            correo.classList.remove("is-invalid");
            correo.classList.add("is-valid");
        }

    });


    // Validar selección del asunto
    asunto.addEventListener("change", function () {

        if (asunto.value === "") {

            errorAsunto.textContent =
                "Selecciona un asunto.";

            asunto.classList.add("is-invalid");
            asunto.classList.remove("is-valid");

        } else {

            errorAsunto.textContent = "";

            asunto.classList.remove("is-invalid");
            asunto.classList.add("is-valid");
        }

    });


    // Validar mensaje mientras el usuario escribe
    mensaje.addEventListener("input", function () {

        if (mensaje.value.trim().length < 10) {

            errorMensaje.textContent =
                "El mensaje debe tener al menos 10 caracteres.";

            mensaje.classList.add("is-invalid");
            mensaje.classList.remove("is-valid");

        } else {

            errorMensaje.textContent = "";

            mensaje.classList.remove("is-invalid");
            mensaje.classList.add("is-valid");
        }

    });


    // Validar todo el formulario al enviarlo
    formulario.addEventListener("submit", function (evento) {

        evento.preventDefault();

        const expresionCorreo =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let formularioValido = true;


        if (nombre.value.trim().length < 3) {
            errorNombre.textContent =
                "El nombre debe tener al menos 3 caracteres.";

            nombre.classList.add("is-invalid");
            formularioValido = false;
        }


        if (!expresionCorreo.test(correo.value.trim())) {
            errorCorreo.textContent =
                "Escribe un correo electrónico válido.";

            correo.classList.add("is-invalid");
            formularioValido = false;
        }


        if (asunto.value === "") {
            errorAsunto.textContent =
                "Selecciona un asunto.";

            asunto.classList.add("is-invalid");
            formularioValido = false;
        }


        if (mensaje.value.trim().length < 10) {
            errorMensaje.textContent =
                "El mensaje debe tener al menos 10 caracteres.";

            mensaje.classList.add("is-invalid");
            formularioValido = false;
        }


        // Si todos los datos son correctos
        if (formularioValido) {

            mensajeExito.classList.remove("d-none");

            formulario.reset();

            nombre.classList.remove("is-valid");
            correo.classList.remove("is-valid");
            asunto.classList.remove("is-valid");
            mensaje.classList.remove("is-valid");
        }

    });

}
// ========================================
// CARRUSEL DE LA PÁGINA PRINCIPAL
// ========================================

// Busca el carrusel solamente si existe en la página
const carruselElemento = document.getElementById("carruselPrincipal");

if (carruselElemento) {

    // Configura el carrusel utilizando JavaScript
    const carrusel = new bootstrap.Carousel(carruselElemento, {
        interval: 4000,
        ride: "carousel",
        pause: "hover",
        wrap: true
    });

}