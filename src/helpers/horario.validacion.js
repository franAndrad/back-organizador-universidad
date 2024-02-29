import { check } from "express-validator";
import resultadosValidacion from "./resultadoValidacion";
import moment from "moment";
import Horario from "../models/horario"

const validarHorario = [
  check("email")
    .notEmpty()
    .withMessage("El correo electrónico es obligatorio")
    .isEmail()
    .withMessage("El correo electrónico debe ser válido"),
  check("userID").notEmpty().withMessage("El userID es obligatorio"),
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
    ),
  check("materias")
    .isArray({ min: 0 })
    .withMessage("Las materias deben ser un arreglo")
    .custom((materias) => {
      if (materias.length === 0) return true;
      for (let materia of materias) {
        if (
          !materia.nombre ||
          !materia.abreviacion ||
          !materia.curso ||
          !materia.horario
        ) {
          throw new Error(
            "Cada materia debe tener nombre, abreviación, curso y horario"
          );
        }
      }
      return true;
    }),
  (req, res, next) => {
    resultadosValidacion(req, res, next);
  },
];

export default validarHorario;
