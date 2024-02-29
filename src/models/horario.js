import mongoose, { Schema } from "mongoose";

// Define el esquema para las materias
const materiaSchema = new Schema({
  nombre: {
    type: String,
    required: false,
  },
  abreviacion: {
    type: String,
    required: true,
  },
  curso: {
    type: String,
    required: true,
  },
  horario: {
    type: String,
    required: true,
  },
});

// Define el esquema para el día
const diaSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  dia: {
    type: String,
    required: true,
  },
  materias: {
    type: [materiaSchema],
    default: [],
  },
});

// Crea el modelo "Horario" basado en el esquema
const Horario = mongoose.model("Horario", diaSchema);

export default Horario;
