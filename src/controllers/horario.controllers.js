import { validationResult } from "express-validator";
import Horario from "../models/horario";

export const listarHorarios = async (req, res) => {
  try {
    const horarios = await Horario.find({ email: req.query.email, userId: req.query.userId});
    res.status(200).json(horarios);
  } catch (error) {
    res.status(404).json({
      mensaje: "No se encuentran horarios",
    });
  }
};

export const crearHorario = async (req, res) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({
        error: error.array(),
      });
    }
    const nuevoHorario = new Horario(req.body);
    await nuevoHorario.save();
    res.status(200).json({
      mensaje: "El horario se cargó correctamente",
    });
  } catch (error) {
    res.status(400).json({
      mensaje: "El horario no se pudo cargar",
    });
  }
};

export const obtenerHorario = async (req, res) => {
  try {
    const horarioBuscado = await Horario.findById(req.params.id);
    if (horarioBuscado) {
      res.status(200).json(horarioBuscado);
    } else {
      res.status(404).json({
        mensaje: "No se encontró el horario",
      });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: "No se pudo encontrar el horario",
    });
  }
};

export const editarHorario = async (req, res) => {
  try {
    console.log("ID recibido:", req.body); // Imprimir el ID en la consola
    await Horario.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "El gasto fue modificado con exito",
    });
  } catch (error) {
    res.status(404).json({
      mensaje: "Error al buscar el horario",
    });
  }
};


export const borrarHorario = async (req, res) => {
  try {
    const horarioEliminado = await Horario.findByIdAndDelete(req.params.id);
    if (horarioEliminado) {
      res.status(200).json({
        mensaje: "El horario fue eliminado con éxito",
      });
    } else {
      res.status(404).json({
        mensaje: "No se encontró el horario",
      });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: "Error al eliminar el horario",
    });
  }
};
