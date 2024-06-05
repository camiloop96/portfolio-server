import { Request, Response } from "express";
import { IGuestbookComment } from "../types/GuestbookTypes";
import GuestbookModel from "../models/GuestbookModel";

export const GuestbookCommentCreateController = async (
  req: Request,
  res: Response
) => {
  try {
    // Verificación de nulidad
    const proyectItemRequest: any = req.body || {};
    const requiredFields: string[] = [
      "name",
      "company",
      "url",
      "message",
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
    const guestbookData = req.body;
    await GuestbookModel.create({
      guest: {
        name: guestbookData.name,
        avatar: guestbookData.avatar,
      },
      postData: {
        message: guestbookData.message,
      },
      company: {
        name: guestbookData.company,
        url: guestbookData.url,
      },
      createdAt: new Date(Date.now()),
    });

    res.status(201).json({
      message: "Gracias por tu comentario",
    });
  } catch (error: any) {
    return res.status(500).json({
      error: "Error interno en el servidor",
    });
  }
};
