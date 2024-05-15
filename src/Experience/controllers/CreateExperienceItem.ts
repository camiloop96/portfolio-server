import { Request, Response } from "express";
import EducationModel from "../models/ExperienceModel";

export const CreateEducationItem = async (req: Request, res: Response) => {
  let educationRequest = req.body || {};
  let { date, position, company, locationJob, responsabilities } =
    educationRequest;
  try {
    if (!educationRequest) {
      return res.status(400).json({
        error: "JSON no proporcionado",
      });
    }
    if (!date || !position || !company || !locationJob || !responsabilities) {
      return res.status(400).json({
        error: "Faltan campos obligatorios",
      });
    }
    const newEducation = new EducationModel(educationRequest);
    newEducation.save();
    res.status(200).json({
      message: "Creado con éxito",
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
