const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "EduStim")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "EduStim", "index.html"));
});

mongoose.connect("mongodb+srv://jean:jeanmp173@cluster0.hziuinu.mongodb.net/loginDB?retryWrites=true&w=majority")
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.log("Error de conexión:", err));

const usuarioSchema = new mongoose.Schema({
  email: String,
  password: String
});

const Usuario = mongoose.model("Usuario", usuarioSchema);

app.post("/registro", async (req, res) => {
  try {
    const email = req.body.email.trim();
    const password = req.body.password.trim();

    const existe = await Usuario.findOne({ email });

    if (existe) {
      return res.json({ mensaje: "El usuario ya existe" });
    }

    const nuevoUsuario = new Usuario({ email, password });
    await nuevoUsuario.save();

    res.json({ mensaje: "Usuario registrado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al registrar usuario" });
  }
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Servidor corriendo en el puerto 3000");
});