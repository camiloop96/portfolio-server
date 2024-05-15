import { Router } from "express";
import FeedRoutes from "../Feed/FeedRoutes";
import EducationRoutes from "../AcademicBackground/EducationRoutes";
import ProjectRoutes from "../Projects/routes/ProjectsRoutes";
import ExperienceRoutes from "../Experience/ExperienceRoutes";

const AppRoutes = Router();

AppRoutes.use("/feed/", FeedRoutes);
AppRoutes.use("/education/", EducationRoutes);
AppRoutes.use("/projects/", ProjectRoutes);
AppRoutes.use("/experience/", ExperienceRoutes);

export default AppRoutes;
