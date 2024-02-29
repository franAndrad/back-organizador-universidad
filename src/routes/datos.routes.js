import { Router } from "express";
import {
  listarHorarios,
  crearHorario,
  obtenerHorario,
  editarHorario,
  borrarHorario,
} from "../controllers/horario.controllers";

import {
  listarParciales,
  crearParcial,
  obtenerParcial,
  editarParcial,
  borrarParcial,
} from "../controllers/parcial.controllers";

import {
  listarMaterias,
  crearMateria,
  obtenerMateria,
  editarMateria,
  borrarMateria,
} from "../controllers/materia.controllers"; // Importar controladores de materias

import validarHorario from "../helpers/horario.validacion";
import validarParcial from "../helpers/parcial.validacion";
import validarMateria from "../helpers/materia.validacion"; // Importar validación de materias

const router = Router();

// Rutas para horarios
router
  .route("/horarios")
  .get(listarHorarios)
  .post(crearHorario);

router
  .route("/horario/:id")
  .get(obtenerHorario)
  .put(editarHorario)
  .delete(borrarHorario);

// Rutas para parciales
router
  .route("/parciales")
  .get(listarParciales)
  .post(validarParcial, crearParcial);

router
  .route("/parcial/:id")
  .get(obtenerParcial)
  .put(editarParcial)
  .delete(borrarParcial);

// Rutas para materias
router
  .route("/materias")
  .get(listarMaterias)
  .post(crearMateria);

router
  .route("/materia/:id")
  .get(obtenerMateria)
  .put(editarMateria)
  .delete(borrarMateria);

export default router;
