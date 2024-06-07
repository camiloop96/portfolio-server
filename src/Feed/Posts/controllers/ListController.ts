import { Request, Response } from "express";
import PostModel from "../models/PostModel";

// Función para obtener todas las publicaciones
export const ListPostController = async (req: Request, res: Response) => {
  try {
    const posts = await PostModel.find().sort({ isPinned: -1, createdAt: -1 });
    return res.status(200).json({
      mesage: "Posts obtenidos con éxido",
      payload: posts,
    });
  } catch (error: any) {
    return res.status(500).json({
      error: "Error interno en el servidor",
    });
  }
};
