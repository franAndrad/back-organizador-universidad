import { Router } from "express";
import { listarGastos,crearGasto,obtenerGasto,editarGasto,borrarGasto} from "../controllers/gastos.controllers";
import validarGasto from "../helpers/gastos.validacion";

const router = Router();

router.route('/gastos')
    .get(listarGastos)
    .post(validarGasto,crearGasto);

router.route('/gastos/:id')
    .get(obtenerGasto)
    .put(validarGasto,editarGasto)
    .delete(borrarGasto);

export default router;