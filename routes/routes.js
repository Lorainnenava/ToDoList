const express = require("express");
const verifyToken = require("../middleware/verifyToken");
const router = express.Router();
const taskSchema = require("../model/modelo");

//CREAR TAREA
router.post("/list/", verifyToken, async (req, res) => {
  const tarea= req.body;
  const _idUser= req.headers._id
  if(!tarea.tarea || !tarea.descripcion){
    return res.status(400).json({msg:'Se requiere llenar todos los campos'})
  }
  try{
    const tareas = taskSchema({
      tarea:tarea.tarea,
      descripcion:tarea.descripcion,
      _idUser:_idUser
    })    
    await tareas.save();
    res.json({ msg: "¡Tarea creada exitosamente!" });
  }catch(err){
    res.status(500).json({ msg: "error" });
  }
});

//VER TAREAS
router.get("/list", verifyToken, (req, res) => {
  const { _id } = req.headers;
  taskSchema
    .find({ _idUser: `${_id}` })
    .then((data) => res.json(data))
    .catch((err) => res.json({ msg: err }));
});

//EDITAR TAREA
router.put("/list/:id", verifyToken, (req, res) => {
  const { id } = req.params;
  const { tarea, descripcion } = req.body;

  taskSchema
    .updateOne({ _id: id }, { $set: { tarea, descripcion } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//EDITAR ESTADO 
router.put("/listEstado/:id", verifyToken, (req, res) => {
  const { id } = req.params;
  const { estado } = req.body;
  taskSchema
    .updateOne({ _id: id }, { $set: { estado } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//ELIMINAR TAREA
router.delete("/list/:id", verifyToken, (req, res) => {
  const { id } = req.params;
  taskSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
