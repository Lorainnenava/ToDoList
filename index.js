const express = require("express");
const mongoose = require("mongoose");
const index = express();
const port = 8015;
const router = require("./routes/routes");
const user= require('./routes/usuario')
const cors = require("cors");
require("dotenv").config();

//MIDDLEWARE
index.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
index.use(express.json());
index.use("/tasks", router);
index.use("/users", user);

index.get("/", function (req, res) {
  res.json("hello");
});

//CONEXION CON MONGO DB
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to mongoDB Atlas"))
  .catch((error) => console.log(error));

index.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`);
});

module.exports = index;
