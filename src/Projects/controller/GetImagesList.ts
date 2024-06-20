import { Request, Response } from "express";
import ProjectModel from "../models/ProjectModel";

export const GetImagesProjectController = async (
  req: Request,
  res: Response
) => {
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
    const images = projectExist.images;

    return res.status(200).json(images);
  } catch (error) {
    return res.status(500).json({
      error: "Error interno en el servidor",
    });
  }
};
