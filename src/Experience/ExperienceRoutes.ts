import { Router } from "express";
import { CreateEducationItem } from "./controllers/CreateExperienceItem";
import { ListEducationItem } from "./controllers/ListExperienceItem";

const ExperienceRoutes = Router();

ExperienceRoutes.post("/create/", CreateEducationItem);
ExperienceRoutes.get("/list/", ListEducationItem);

export default ExperienceRoutes;
