import { Router } from "express";
import { listarGastos } from "../controllers/gastos.controllers";

const router = Router();

router.route('/gastos')
    .get(listarGastos)
    // .post(crearGasto);

// router.route('/gastos/:id')
//     .get(obtenerPedido)
//     .put(editarPedido)
//     .delete(borrarPedido);

export default router;