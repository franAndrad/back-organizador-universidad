// import {validationResult} from 'express-validator';
import Gastos from '../models/gastos';

export const listarGastos = async (req, res) => {
    try {
        const listarGastos = await Gastos.find();
        res.status(200).json(listarGastos);
    }
    catch (error) {
        res.status(404).json({
            mensaje: 'No se encuentran gastos'
        });
    }
};