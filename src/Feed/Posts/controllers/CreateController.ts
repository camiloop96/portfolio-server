import { Request, Response } from "express";
import { getCurrentDate } from "../../../../utils/dateManager";
import PostModel from "../models/PostModel";

export const CreatePostController = async (req: Request, res: Response) => {
  console.log(`${getCurrentDate()} POST api/camilo-polania/feed/post/create`);

  // Obtencion del cuerpo del json
  let { type } = req.body;

  // Request
  let postRequest = req.body || {};

  // Verificacion de nulidad
  const requiredFiels: string[] = ["type", "hasTitle", "content", "hasFlags"];
  const missingFields: string[] = requiredFiels.filter(
    (field: string) => !postRequest[field]
  );

  if (missingFields.length > 0) {
    return res.status(400).json({
      error: `Los campos ${missingFields.join(", ")} son obligatorios`,
    });
  }

  // Verificacion de typos de post
  if (type !== "image" && type !== "text" && type !== "video") {
    return res.status(400).json({
      error: `Tipo ${type} no válido`,
    });
  }

  try {
    let savePost = new PostModel();
    savePost.postData = postRequest;
    savePost.createdAt = new Date(Date.now());
    if (savePost.isPinned) {
      savePost.isPinned = postRequest.isPinned;
    }
    await savePost.save();
    return res.status(200).json({
      message: "Post creado",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Error interno en el servidor",
    });
  }
};
