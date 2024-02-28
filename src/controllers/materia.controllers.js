import { validationResult } from "express-validator";
import Materia from "../models/materia";

const materiasData = [
    {
      nombre: "Análisis Matemático 1",
      abreviacion: "AM1",
      numero: 1,
      modalidad: "A",
      regular: [],
      aprobada: [],
      nota: 0,
    },
    {
      nombre: "Álgebra y Geometría Analítica",
      abreviacion: "AGA",
      numero: 2,
      modalidad: "A",
      regular: [],
      aprobada: [],
      nota: 0,
    },
    {
      nombre: "Física 1",
      abreviacion: "FIS1",
      numero: 3,
      modalidad: "A",
      regular: [],
      aprobada: [],
      nota: 0,
    },
    {
      nombre: "Inglés 1",
      abreviacion: "IN1",
      numero: 4,
      modalidad: "A",
      regular: [],
      aprobada: [],
      nota: 0,
    },
    {
      nombre: "Lógica y Estructuras Discretas",
      abreviacion: "LED",
      numero: 5,
      modalidad: "1C-CC",
      regular: [],
      aprobada: [],
      nota: 0,
    },
    {
      nombre: "Algoritmos y Estructuras de Datos",
      abreviacion: "AED",
      numero: 6,
      modalidad: "A",
      regular: [],
      aprobada: [],
      nota: 0,
    },
    {
      nombre: "Arquitectura de Computadoras",
      abreviacion: "ACO",
      numero: 7,
      modalidad: "2C-CC",
      regular: [],
      aprobada: [],
      nota: 0,
    },
    {
      nombre: "Sistemas y Procesos de Negocio",
      abreviacion: "SPN",
      numero: 8,
      modalidad: "1C-CC",
      regular: [],
      aprobada: [],
      nota: 0,
    },
    {
      nombre: "Ingeniería y Sociedad",
      abreviacion: "Ing y Soc",
      numero: 9,
      modalidad: "2C-CC",
      regular: [],
      aprobada: [],
      nota: 0,
    },
    {
      nombre: "Análisis Matemático 2",
      abreviacion: "AM2",
      numero: 10,
      modalidad: "A",
      regular: [1, 2],
      aprobada: [],
      nota: 0,
    },
    {
      nombre: "Física 2",
      abreviacion: "FIS2",
      numero: 11,
      modalidad: "A",
      regular: [1, 3],
      aprobada: [],
      nota: 0,
    },
    {
      nombre: "Inglés 2",
      abreviacion: "IN2",
      numero: 12,
      modalidad: "A",
      regular: [4],
      aprobada: [],
      nota: 0,
    },
    {
      nombre: "Sintaxis y Semántica de los Lenguajes",
      abreviacion: "SSL",
      numero: 13,
      modalidad: "1C-CC",
      regular: [5, 6],
      aprobada: [],
      nota: 0,
    },
    {
      nombre: "Paradigmas de Programación",
      abreviacion: "PPR",
      numero: 14,
      modalidad: "2C-CC",
      regular: [5, 6],
      aprobada: [],
      nota: 0,
    },
    {
      nombre: "Sistemas Operativos",
      abreviacion: "SOP",
      numero: 15,
      modalidad: "A",
      regular: [7],
      aprobada: [],
      nota: 0,
    },
    {
      nombre: "Análisis de Sistemas de Información (Integradora)",
      abreviacion: "ASI",
      numero: 16,
      modalidad: "A",
      regular: [6, 8],
      aprobada: [],
      nota: 0,
    },
    {
      nombre: "Probabilidad y Estadísticas",
      abreviacion: "EST",
      numero: 17,
      modalidad: "1C-CC",
      regular: [1, 2],
      aprobada: [],
      nota: 0,
    },
    {
      nombre: "Economía",
      abreviacion: "ECO",
      numero: 18,
      modalidad: "2C-CC",
      regular: [],
      aprobada: [1, 2],
      nota: 0,
    },
    {
      nombre: "Bases de Datos",
      abreviacion: "BDA",
      numero: 19,
      modalidad: "1C-CC",
      regular: [13, 16],
      aprobada: [5, 6],
      nota: 0,
    },
    {
      nombre: "Desarrollo de Software",
      abreviacion: "Dsoft",
      numero: 20,
      modalidad: "1C-CC",
      regular: [14, 16],
      aprobada: [5, 6],
      nota: 0,
    },
    {
      nombre: "Comunicación de Datos",
      abreviacion: "COM",
      numero: 21,
      modalidad: "A",
      regular: [],
      aprobada: [3, 7],
      nota: 0,
    },
    {
      nombre: "Análisis Numérico",
      abreviacion: "AN",
      numero: 22,
      modalidad: "2C-CC",
      regular: [9],
      aprobada: [1, 2],
      nota: 0,
    },
    {
      nombre: "Diseño de Sistemas de Información (Integradora)",
      abreviacion: "DSI",
      numero: 99,
      modalidad: "A",
      regular: [14, 16],
      aprobada: [4, 6, 8],
      nota: 0,
    },
    {
      nombre: "Seminario Integrador (Analista)",
      abreviacion: "SEMI",
      numero: 23,
      modalidad: "2C",
      regular: [16],
      aprobada: [6, 8, 13, 14],
      nota: 0,
    },
    {
      nombre: "Legislación",
      abreviacion: "LEG",
      numero: 24,
      modalidad: "2C-CC",
      regular: [11],
      aprobada: [],
      nota: 0,
    },
    {
      nombre: "Ingeniería y Calidad de Software",
      abreviacion: "IS",
      numero: 25,
      modalidad: "2C-CC",
      regular: [19, 20, 23],
      aprobada: [13, 14],
      nota: 0,
    },
    {
      nombre: "Redes de Datos",
      abreviacion: "RED",
      numero: 26,
      modalidad: "A",
      regular: [15, 21],
      aprobada: [],
      nota: 0,
    },
    {
      nombre: "Investigación Operativa",
      abreviacion: "IOP",
      numero: 27,
      modalidad: "A",
      regular: [17, 22],
      aprobada: [],
      nota: 0,
    },
    {
      nombre: "Simulación",
      abreviacion: "SIM",
      numero: 28,
      modalidad: "1C-CC",
      regular: [17],
      aprobada: [],
      nota: 0,
    },
    {
      nombre: "Tecnologías para la Automatización",
      abreviacion: "TA",
      numero: 29,
      modalidad: "2C-CC",
      regular: [10, 22],
      aprobada: [9],
      nota: 0,
    },
    {
      nombre: "Administración de Sistemas de Información (Integradora)",
      abreviacion: "AS",
      numero: 30,
      modalidad: "A",
      regular: [18, 23],
      aprobada: [16],
      nota: 0,
    },
    {
      nombre: "Inteligencia Artificial",
      abreviacion: "IA",
      numero: 31,
      modalidad: "A",
      regular: [28],
      aprobada: [17, 22],
      nota: 0,
    },
    {
      nombre: "Ciencia de Datos",
      abreviacion: "CD",
      numero: 32,
      modalidad: "2C-CC",
      regular: [28],
      aprobada: [17, 19],
      nota: 0,
    },
    {
      nombre: "Sistemas de Gestión",
      abreviacion: "SGN",
      numero: 33,
      modalidad: "A",
      regular: [18, 27],
      aprobada: [23],
      nota: 0,
    },
    {
      nombre: "Gestión Gerencial",
      abreviacion: "GG",
      numero: 34,
      modalidad: "1C-CC",
      regular: [24, 30],
      aprobada: [18],
      nota: 0,
    },
    {
      nombre: "Seguridad en los Sistemas de Información",
      abreviacion: "SSI",
      numero: 35,
      modalidad: "1C-CC",
      regular: [26, 30],
      aprobada: [20, 21],
      nota: 0,
    },
    {
      nombre: "Proyecto Final (Integradora)",
      abreviacion: "PF",
      numero: 36,
      modalidad: "A",
      regular: [25, 26, 30],
      aprobada: [12, 20, 23],
      nota: 0,
    },
]

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
    // Crear un array para almacenar las nuevas materias
    const nuevasMaterias = [];

    // Iterar sobre los datos y crear una nueva materia para cada entrada
    for (const materiaData of materiasData) {
      const nuevaMateria = new Materia({
        nombre: materiaData.nombre,
        abreviacion: materiaData.abreviacion,
        numero: materiaData.numero,
        modalidad: materiaData.modalidad,
        regular: [],
        aprobada: [],
        nota: 0, // Establecer la nota en 0
      });

      // Guardar la nueva materia en el array
      nuevasMaterias.push(nuevaMateria);
    }

    // Guardar todas las nuevas materias en la base de datos
    await Materia.insertMany(nuevasMaterias);

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
