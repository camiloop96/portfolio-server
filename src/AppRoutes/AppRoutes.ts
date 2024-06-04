import { Router } from "express";
import FeedRoutes from "../Feed/FeedRoutes";
import EducationRoutes from "../AcademicBackground/EducationRoutes";
import ProjectRoutes from "../Projects/routes/ProjectsRoutes";
import ExperienceRoutes from "../Experience/ExperienceRoutes";
import GuestbookRoutes from "../Guestbook/routes/GuestbookRoutes";

const AppRoutes = Router();

AppRoutes.use("/feed/", FeedRoutes);
AppRoutes.use("/education/", EducationRoutes);
AppRoutes.use("/projects/", ProjectRoutes);
AppRoutes.use("/experience/", ExperienceRoutes);
AppRoutes.use("/guestbook/", GuestbookRoutes);

export default AppRoutes;
