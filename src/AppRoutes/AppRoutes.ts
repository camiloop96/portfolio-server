import { Router } from "express";
import FeedRoutes from "../Feed/FeedRoutes";

const AppRoutes = Router();

AppRoutes.use("/feed/", FeedRoutes);

export default AppRoutes;
