import { Router } from "express";
import { listarGastos,crearGasto,obtenerGasto,editarGasto,borrarGasto} from "../controllers/gastos.controllers";

const router = Router();

router.route('/gastos')
    .get(listarGastos)
    .post(crearGasto);

router.route('/gastos/:id')
    .get(obtenerGasto)
    .put(editarGasto)
    .delete(borrarGasto);

export default router;