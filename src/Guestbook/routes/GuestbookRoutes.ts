import { Router } from "express";
import { GuestbookCommentCreateController } from "../controller/CreateController";
import { GuestbookCommentListController } from "../controller/ListController";

const GuestbookRoutes = Router();

GuestbookRoutes.get("/list/", GuestbookCommentListController);
GuestbookRoutes.post("/create/", GuestbookCommentCreateController);

export default GuestbookRoutes;
