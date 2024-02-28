import { check } from "express-validator";
import resultadosValidacion from "./resultadoValidacion";

const validarParcial = [
  check("fecha")
    .notEmpty()
    .withMessage("La fecha es obligatoria"),
  check("materia")
    .notEmpty()
    .withMessage("La materia es obligatoria"),
  (req, res, next) => {
    resultadosValidacion(req, res, next);
  },
];

export default validarParcial;
