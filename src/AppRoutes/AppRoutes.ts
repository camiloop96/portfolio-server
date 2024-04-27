import { Router } from "express";
import FeedRoutes from "../Feed/FeedRoutes";
import EducationRoutes from "../AcademicBackground/EducationRoutes";

const AppRoutes = Router();

AppRoutes.use("/feed/", FeedRoutes);
AppRoutes.use("/education/", EducationRoutes);


export default AppRoutes;
