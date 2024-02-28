import { validationResult } from "express-validator";
import Materia from "../models/materia";

export const listarMaterias = async (req, res) => {
  try {
    const materias = await Materia.find({
      email: req.query.email,
      userId: req.query.userId,
    });
    res.status(200).json(materias);
  } catch (error) {
    res.status(404).json({
      mensaje: "No se encuentran materias",
    });
  }
};

export const crearMateria = async (req, res) => {
  try {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(400).json({
        errores: errores.array(),
      });
    }
    const nuevaMateria = new Materia(req.body);
    await nuevaMateria.save();
    res.status(200).json({
      mensaje: "La materia se creó correctamente",
    });
  } catch (error) {
    res.status(400).json({
      mensaje: "La materia no se pudo crear",
    });
  }
};

export const obtenerMateria = async (req, res) => {
  try {
    const materiaBuscada = await Materia.findById(req.params.id);
    if (materiaBuscada) {
      res.status(200).json(materiaBuscada);
    } else {
      res.status(404).json({
        mensaje: "No se encontró la materia",
      });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: "No se pudo encontrar la materia",
    });
  }
};

export const editarMateria = async (req, res) => {
  try {
    await Materia.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "La materia se modificó con éxito",
    });
  } catch (error) {
    res.status(404).json({
      mensaje: "Error al buscar la materia",
    });
  }
};

export const borrarMateria = async (req, res) => {
  try {
    const materiaEliminada = await Materia.findByIdAndDelete(req.params.id);
    if (materiaEliminada) {
      res.status(200).json({
        mensaje: "La materia fue eliminada con éxito",
      });
    } else {
      res.status(404).json({
        mensaje: "No se encontró la materia",
      });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: "Error al eliminar la materia",
    });
  }
};
