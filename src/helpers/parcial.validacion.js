import { check } from "express-validator";
import resultadosValidacion from "./resultadoValidacion";

const validarParcial = [
  check("fecha").notEmpty().withMessage("La fecha es obligatoria"),
  check("materia").notEmpty().withMessage("La materia es obligatoria"),
  check("email")
    .notEmpty()
    .withMessage("El correo electrónico es obligatorio")
    .isEmail()
    .withMessage("El correo electrónico debe ser válido"),
  check("userID").notEmpty().withMessage("El userID es obligatorio"),
  (req, res, next) => {
    resultadosValidacion(req, res, next);
  },
];

export default validarParcial;
