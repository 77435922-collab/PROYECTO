const form = document.getElementById("registroForm");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  try {
    const respuesta = await fetch("/registro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await respuesta.json();
    mensaje.textContent = data.mensaje;

    if (data.mensaje === "Usuario registrado correctamente") {
      mensaje.style.color = "green";
      form.reset();
    } else {
      mensaje.style.color = "red";
    }

  } catch (error) {
    mensaje.textContent = "Error al conectar con el servidor";
    mensaje.style.color = "red";
  }
});