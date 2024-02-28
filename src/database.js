import mongoose from "mongoose";

const url =
  "mongodb+srv://franandrad:15421-6529fa@cluster1.qtkjl9k.mongodb.net/";

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;

connection.on("error", (err) => {
  console.error("Error de conexión a MongoDB:", err);
});

connection.once("open", () => {
  console.log("Conexión a la base de datos establecida");
});
