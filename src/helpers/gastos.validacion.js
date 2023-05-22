import { check } from "express-validator";
import resultadosValidacion from "./resultadoValidacion";
import moment from "moment";

const validarGasto = [
  check("usuario")
        .notEmpty()
        .withMessage("El nombre del usuario es obligatorio")
        .isLength({ min: 2, max: 60 })
        .withMessage("El nombre del usuario debe tener entre 2 y 50 caracteres"),
  check("fecha")
        .notEmpty()
        .withMessage("La fecha es obligatoria")
        .custom((input) => {
        const result = moment(input, "DD/MM/YY", true).isValid();
        console.log(result);
        if (result) {
            return true;
        } else {
            throw new Error(
            "La fecha debe respetar el siguiente formato ( DD/MM/AA )"
            );
        }
    }),
    check('producto')
        .notEmpty()
        .withMessage('El producto es obligatorio')
        .isLength({min:2, max:60})
        .withMessage('El producto debe tener entre 2 y 50 caracteres'),
    check("local")
        .isLength({ min: 4, max: 60 }),
    check("precio")
        .notEmpty()
        .withMessage("El precio del producto es obligatorio")
        .isNumeric()
        .withMessage("El precio debe ser un numero")
        .custom((value) => {
            if (value >= 0 && value <= 9999) return true;
            else throw new Error("El precio debe estar entre 0 y 9999");
      }),
  (req, res, next) => {
    resultadosValidacion(req, res, next);
  },
];

export default validarGasto;
