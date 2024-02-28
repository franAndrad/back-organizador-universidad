import { check } from "express-validator";
import resultadosValidacion from "./resultadoValidacion";

const validarMateria = [
  check("nombre")
    .notEmpty()
    .withMessage("El nombre de la materia es obligatorio"),
  check("abreviacion")
    .notEmpty()
    .withMessage("La abreviación de la materia es obligatoria"),
  check("numero")
    .isInt({ min: 1 })
    .withMessage("El número de la materia debe ser un entero positivo"),
  check("modalidad")
    .notEmpty()
    .withMessage("La modalidad de la materia es obligatoria"),
  check("regular")
    .isArray()
    .withMessage("La lista de regulares debe ser un arreglo"),
  check("aprobada")
    .isArray()
    .withMessage("La lista de aprobadas debe ser un arreglo"),
  check("nota")
    .isInt({ min: 0, max: 10 })
    .withMessage("La nota debe ser un entero entre 0 y 10"),
  (req, res, next) => {
    resultadosValidacion(req, res, next);
  },
];

export default validarMateria;
