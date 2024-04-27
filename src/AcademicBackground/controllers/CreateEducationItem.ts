import { Request, Response } from "express";
import EducationModel from "../models/EducationModel";

export const CreateEducationItem = async (req: Request, res: Response) => {
  let educationRequest = req.body || {};
  let { date, career, institute, locationCareer, description } =
    educationRequest;
  try {
    if (!educationRequest) {
      return res.status(400).json({
        error: "JSON no proporcionado",
      });
    }
    if (!date || !career || !institute || !locationCareer || !description) {
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
