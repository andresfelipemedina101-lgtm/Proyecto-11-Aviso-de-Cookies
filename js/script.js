// Obtenemos el banner y el botón del HTML
const bannerCookies = document.getElementById("bannerCookies");
const botonAceptar = document.getElementById("botonAceptar");

// Función que muestra el banner quitando la clase "oculto"
function mostrarBanner() {
    bannerCookies.classList.remove("oculto");
}

// Función que oculta el banner agregando la clase "oculto"
function ocultarBanner() {
    bannerCookies.classList.add("oculto");
}

// Función que revisa si el usuario ya aceptó las cookies antes
function verificarConsentimiento() {

    // Leemos el valor guardado en LocalStorage
    const consentimiento = localStorage.getItem("cookiesAceptadas");

    // Si ya aceptó, no mostramos el banner; si no, lo mostramos
    if (consentimiento === "si") {
        ocultarBanner();
    } else {
        mostrarBanner();
    }
}

// Detectamos cuando el usuario hace clic en "Aceptar cookies"
botonAceptar.addEventListener("click", function () {

    // Guardamos el consentimiento en LocalStorage
    localStorage.setItem("cookiesAceptadas", "si");

    // Ocultamos el banner
    ocultarBanner();
});

// Al abrir la página revisamos si debemos mostrar el banner
verificarConsentimiento();
