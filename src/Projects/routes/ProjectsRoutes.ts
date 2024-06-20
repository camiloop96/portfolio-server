import { Router } from "express";
import { ProjectListController } from "../controller/ListController";
import { ProjectCreateController } from "../controller/CreateController";
import { ProjectDetailController } from "../controller/DetailController";
import { GetImagesProjectController } from "../controller/GetImagesList";

const ProjectRoutes = Router();

ProjectRoutes.get("/list/:category", ProjectListController);
ProjectRoutes.get("/detail/:id", ProjectDetailController);
ProjectRoutes.post("/create/", ProjectCreateController);
ProjectRoutes.get("/get/images/:id/", GetImagesProjectController);

export default ProjectRoutes;
