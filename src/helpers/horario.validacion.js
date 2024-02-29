import { check } from "express-validator";
import resultadosValidacion from "./resultadoValidacion";
import moment from "moment";
import Horario from "../models/horario"

const validarHorario = [
  check("dia")
    .notEmpty()
    .withMessage("El día es obligatorio")
    .isIn([
      "DOMINGO",
      "LUNES",
      "MARTES",
      "MIERCOLES",
      "JUEVES",
      "VIERNES",
      "SABADO",
    ])
    .withMessage(
      "El día debe ser uno de los siguientes: DOMINGO, LUNES, MARTES, MIERCOLES, JUEVES, VIERNES, SABADO"
    )
,
  check("materias")
    .isArray({ min: 0 })
    .withMessage("Las materias deben ser un arreglo"),
  (req, res, next) => {
    resultadosValidacion(req, res, next);
  },
];

export default validarHorario;
