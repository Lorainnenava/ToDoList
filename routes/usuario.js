const express = require("express");
const user = express.Router();
const UserSchema = require("../model/modelUser");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

//CREAR USUARIO
user.post("/", async (req, res) => {
  const { usuario, contraseña } = req.body;
  if (!usuario || !contraseña)
    return res
      .status(400)
      .json({ msg: "Se requiere llenar todos los campos" });

  try {
    const existeUsuario = await UserSchema.findOne({
      usuario: usuario,
    });
    if (existeUsuario)
      return res
        .status(404)
        .json({ msg: "Ya existe un usuario con este email"});
    const usuarios = UserSchema({
      usuario,
      contraseña: await UserSchema.encryptPassword(contraseña),
    });
    await usuarios.save();
    res.json({ msg: "¡Usuario creado exitosamente!" });
  } catch (error) {
    res.status(500).json({ msg: "error" });
  }
});

user.patch("/", async (req, res) => {
  const { usuario, contraseña } = req.body;
  if (!usuario || !contraseña)
    return res.status(404).json({ msg: "rellene todos los campos" });
  try {
    const usuarios = await UserSchema.findOne({
      usuario: usuario,
    });
    if (!usuarios)
      return res
        .status(404)
        .json({ msg: "usuario no registrado", usuarios: null });
    const passwordCorrect = await UserSchema.comparePassword(
      req.body.contraseña,
      usuarios.contraseña
    );
    if (!passwordCorrect)
      return res.status(404).json({ token: null, msg: "contraseña incorrecta" });
    const token = jwt.sign({ usuarios }, process.env.SECRET_KEY, {
      expiresIn: 60 * 60,
    });
    res.json({ usuarios, msg: "Iniciastes sesion", token });
  } catch (error) {
    res.status(500).json({ msg: "hable con el admin" });
  }
});

module.exports = user;
