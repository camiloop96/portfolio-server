import { Request, Response } from "express";
import GuestbookModel from "../models/GuestbookModel";

export const GuestbookCommentListController = async (
  req: Request,
  res: Response
) => {
  try {
    const guestbookComments = await GuestbookModel.find();
    res.status(200).json(guestbookComments);
  } catch (error) {
    return res.status(500).json({
      error: "Error interno en el servidor",
    });
  }
};
