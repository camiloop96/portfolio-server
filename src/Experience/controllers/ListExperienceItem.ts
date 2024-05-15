import { Request, Response } from "express";
import EducationModel from "../models/ExperienceModel";

export const ListEducationItem = async (req: Request, res: Response) => {
  try {
    const educations = await EducationModel.find();
    res.json(educations);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
