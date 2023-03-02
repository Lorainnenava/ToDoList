const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;
const UserSchema = new Schema(
  {
    usuario: { type: String, required: true },
    contraseña: { type: String, required: true },
  },
  { timestamps: true }
);

UserSchema.statics.encryptPassword = async (contraseña) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(contraseña, salt);
};
UserSchema.statics.comparePassword = async (contraseña, contraseñaRecibida) => {
  return await bcrypt.compare(contraseña, contraseñaRecibida);
};

module.exports = mongoose.model("users", UserSchema);
