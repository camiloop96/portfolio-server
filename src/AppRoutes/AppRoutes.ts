import { Router } from "express";
import FeedRoutes from "../Feed/FeedRoutes";
import EducationRoutes from "../AcademicBackground/EducationRoutes";
import ProjectRoutes from "../Projects/routes/ProjectsRoutes";

const AppRoutes = Router();

AppRoutes.use("/feed/", FeedRoutes);
AppRoutes.use("/education/", EducationRoutes);
AppRoutes.use("/projects/", ProjectRoutes);

export default AppRoutes;
