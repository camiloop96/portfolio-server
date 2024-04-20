import { Router } from "express";
import PostsRoutes from "./Posts/PostsRoutes";

const FeedRoutes = Router();

FeedRoutes.use("/post/", PostsRoutes);

export default FeedRoutes;
