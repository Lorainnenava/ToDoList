const mongoose = require("mongoose");
const users = require("./modelUser");
const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    tarea: String,
    descripcion: String,
    estado: { type: Boolean, default: false },
    _idUser: { type: Schema.ObjectId, ref: users },
  },
  { timestamps: true }
);

module.exports = mongoose.model("tasks", taskSchema);
