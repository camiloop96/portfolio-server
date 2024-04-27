import { Router } from "express";
import { CreateEducationItem } from "./controllers/CreateEducationItem";
import { ListEducationItem } from "./controllers/ListEducationItem";

const EducationRoutes = Router();

EducationRoutes.post("/create/", CreateEducationItem);
EducationRoutes.get("/list/", ListEducationItem);

export default EducationRoutes;
