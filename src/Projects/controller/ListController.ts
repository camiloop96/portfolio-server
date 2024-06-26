import { Request, Response } from "express";
import ProjectModel from "../models/ProjectModel";

export const ProjectListController = async (req: Request, res: Response) => {
  try {
    const { category } = req.params;
    const projects = await ProjectModel.find({ category: category }).select(
      "-detail"
    );
    res.status(200).json(projects);
  } catch (error) {
    return res.status(500).json({
      error: "Error interno en el servidor",
    });
  }
};
