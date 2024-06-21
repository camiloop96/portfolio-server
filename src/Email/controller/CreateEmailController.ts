import { Request, Response } from "express";
import EmailModel from "../model/EmailModel";

// Create a new email
export const CreateEmailController = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const existEmail = await EmailModel.findOne({ email: email });
    if (existEmail) {
      return res.status(200).json({
        message: "Tu correo ya esta registrado",
      });
    }
    const newEmail = new EmailModel({ email });
    await newEmail.save();

    res
      .status(201)
      .json({ message: "Email created successfully", data: newEmail });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
