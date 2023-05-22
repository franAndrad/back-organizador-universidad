import { validationResult } from "express-validator";
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

export const crearGasto = async (req, res) => {
    try {
        const error = validationResult(req,res);
            if(!error.isEmpty()) {
                return res.status(400).json({
                    error: error.array()
            });
        }
        const nuevoGasto = new Gastos({
            usuario: req.body.usuario,
            fecha: req.body.fecha,
            producto: req.body.producto,
            local: req.body.local,
            precio: req.body.precio,
        })
        await nuevoGasto.save();
        res.status(200).json({
            mensaje: 'El gasto se cargo correctamente'
        });
    } catch (error) {
        res.status(400).json({
            mensaje: 'El gasto no se pudo cargar'
        });
    }
};

export const obtenerGasto = async (req,res) => {
    try {
        const gastoBuscado = await Gastos.findById(req.params.id);
        res.status(200).json(gastoBuscado);
    } catch (error) {
        res.status(400).json({
            mensaje: 'No se encontro el gasto',
        });
    }
}

export const editarGasto = async (req, res) => {
  try {
    await Gastos.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "El gasto fue modificado con exito",
    });
  } catch (error) {
    res.status(404).json({
      mensaje: "Error al buscar el gasto",
    });
  }
};

export const borrarGasto = async (req, res) => {
  try {
    await Gastos.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "El gasto se elimino con exito",
    });
  } catch (error) {
    res.status(400).json({
      mensaje: "El gasto no pudo ser eliminado",
    });
  }
};