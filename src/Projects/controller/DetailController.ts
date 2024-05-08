import { Request, Response } from "express";
import ProjectModel from "../models/ProjectModel";

export const ProjectDetailController = async (req: Request, res: Response) => {
  try {
    // Request
    let { id } = req.params;

    // Comprobacion de nulidad
    if (!id) {
      return res.status(400).json({
        error: "Falta id de proyecto",
      });
    }

    // Busqueda de proyecto
    let projectExist = await ProjectModel.findById(id);

    // Comprobacion de nulidad
    if (!projectExist) {
      return res.status(400).json({
        error: "Proyecto no existe",
      });
    }

    return res.status(200).json(projectExist);
  } catch (error) {
    return res.status(500).json({
      error: "Error interno en el servidor",
    });
  }
};
