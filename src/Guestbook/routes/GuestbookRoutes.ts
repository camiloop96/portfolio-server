import { Router } from "express";
import { GuestbookCommentCreateController } from "../controller/CreateController";

const GuestbookRoutes = Router();

GuestbookRoutes.get("/list/", GuestbookCommentCreateController);
GuestbookRoutes.post("/create/", GuestbookCommentCreateController);

export default GuestbookRoutes;
