import { Request, Response } from "express";
import { IProject } from "../types/ProjectTypes";
import ProjectModel from "../models/ProjectModel";

export const ProjectCreateController = async (req: Request, res: Response) => {
  try {
    // Verificación de nulidad
    const proyectItemRequest: any = req.body || {};
    const requiredFields: string[] = [
      "title",
      "subtitle",
      "description",
      "images",
      "tagList",
      "isPrivate",
      //   "isOwn",
      "detail",
    ];

    // Verificar que todos los campos obligatorios estén presentes
    const missingFields: string[] = requiredFields.filter(
      (field: string) => !proyectItemRequest[field]
    );

    if (missingFields.length > 0) {
      return res.status(400).json({
        error: `Los campos ${missingFields.join(", ")} son obligatorios.`,
      });
    }

    // Create
    const projectData: IProject = req.body;
    await ProjectModel.create(projectData);

    res.status(201).json({
      message: "Proyecto creado",
    });
  } catch (error: any) {
    return res.status(500).json({
      error: "Error interno en el servidor",
    });
  }
};
