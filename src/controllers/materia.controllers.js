import fs from "fs";
import path from "path";
import { validationResult } from "express-validator";
import Materia from "../models/Materia";

// Ruta al archivo JSON de materias
const dataFilePath = path.join(__dirname, ".", "data", "materias.json");

// Función para leer los datos del archivo JSON
const leerDatosMaterias = () => {
  try {
    const data = fs.readFileSync(dataFilePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error al leer el archivo de datos de materias:", error);
    return [];
  }
};

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

    // Modificar el email y userId de cada elemento del archivo JSON
    let materias = leerDatosMaterias().map((materia) => {
      return Object.assign({}, materia, {
        email: req.body.email,
        userId: req.body.userId,
      });
    });

    // Guardar todas las materias en la base de datos
    await Materia.insertMany(materias);

    res.status(200).json({
      mensaje: "Las materias se crearon correctamente",
    });
  } catch (error) {
    res.status(400).json({
      mensaje: "Las materias no se pudieron crear",
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
