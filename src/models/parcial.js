import mongoose from "mongoose";

const { Schema } = mongoose;

// Define el esquema para los parciales
const parcialSchema = new Schema({
  fecha: {
    type: String,
    required: true,
  },
  materia: {
    type: String,
    ref: "Materia", // Referencia al modelo de Materia
    required: true,
  },
});

// Crea el modelo "Parcial" basado en el esquema
const Parcial = mongoose.model("Parcial", parcialSchema);

export default Parcial;
