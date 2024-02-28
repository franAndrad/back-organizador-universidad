import { validationResult } from "express-validator";
import Parcial from "../models/parcial";

export const listarParciales = async (req, res) => {
  try {
    const parciales = await Parcial.find({
      email: req.query.email,
      userId: req.query.userId,
    });
    res.status(200).json(parciales);
  } catch (error) {
    res.status(404).json({
      mensaje: "No se encuentran parciales",
    });
  }
};

export const crearParcial = async (req, res) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({
        error: error.array(),
      });
    }
    const nuevoParcial = new Parcial(req.body);
    await nuevoParcial.save();
    res.status(200).json({
      mensaje: "El parcial se cargó correctamente",
    });
  } catch (error) {
    res.status(400).json({
      mensaje: "El parcial no se pudo cargar",
    });
  }
};

export const obtenerParcial = async (req, res) => {
  try {
    const parcialBuscado = await Parcial.findById(req.params.id);
    if (parcialBuscado) {
      res.status(200).json(parcialBuscado);
    } else {
      res.status(404).json({
        mensaje: "No se encontró el parcial",
      });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: "No se pudo encontrar el parcial",
    });
  }
};

export const editarParcial = async (req, res) => {
  try {
    console.log("ID recibido:", req.body); // Imprimir el ID en la consola
    await Parcial.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "El parcial fue modificado con éxito",
    });
  } catch (error) {
    res.status(404).json({
      mensaje: "Error al buscar el parcial",
    });
  }
};

export const borrarParcial = async (req, res) => {
  try {
    const parcialEliminado = await Parcial.findByIdAndDelete(req.params.id);
    if (parcialEliminado) {
      res.status(200).json({
        mensaje: "El parcial fue eliminado con éxito",
      });
    } else {
      res.status(404).json({
        mensaje: "No se encontró el parcial",
      });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: "Error al eliminar el parcial",
    });
  }
};
