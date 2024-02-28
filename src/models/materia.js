import mongoose from "mongoose";

const { Schema } = mongoose;

// Define el esquema para las materias
const materiaSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  abreviacion: {
    type: String,
    required: true,
  },
  numero: {
    type: Number,
    required: true,
  },
  modalidad: {
    type: String,
    required: true,
  },
  regular: {
    type: [Number],
    default: [],
  },
  aprobada: {
    type: [Number],
    default: [],
  },
  nota: {
    type: Number,
    default: 0,
  },
});

// Crea el modelo "Materia" basado en el esquema
const Materia = mongoose.model("Materia", materiaSchema);

export default Materia;
