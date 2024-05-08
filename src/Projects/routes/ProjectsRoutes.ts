import { Router } from "express";
import { ProjectListController } from "../controller/ListController";
import { ProjectCreateController } from "../controller/CreateController";
import { ProjectDetailController } from "../controller/DetailController";

const ProjectRoutes = Router();

ProjectRoutes.get("/list/", ProjectListController);
ProjectRoutes.get("/detail/:id", ProjectDetailController);
ProjectRoutes.post("/create/", ProjectCreateController);

export default ProjectRoutes;
