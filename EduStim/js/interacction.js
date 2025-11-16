//Psicologia
let usuario = localStorage.getItem("usuario");

function login() {
    const nombre = document.getElementById("nombre").value;

    if (nombre.trim() === "") {
        alert("Ingresa un nombre");
        return;
    }

    localStorage.setItem("usuario", nombre);

    window.location.href = "psicologia.html";
}

if (window.location.pathname.includes("psicologia.html")) {
    document.getElementById("titulo").innerText = "Bienvenido, " + usuario;
}

//Estimulacion
let usuarioE = localStorage.getItem("usuarioE");

function login() {
    const nombre = document.getElementById("nombre").value;

    if (nombre.trim() === "") {
        alert("Ingresa un nombre");
        return;
    }

    localStorage.setItem("usuarioE", nombre);

    window.location.href = "Estimulacion.html";
}

if (window.location.pathname.includes("Estimulacion.html")) {
    document.getElementById("titulo").innerText = "Bienvenido, " + usuarioE;
}
