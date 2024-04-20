import { Router } from "express";
import { CreatePostController } from "./controllers/CreateController";
import { ListPostController } from "./controllers/ListController";

const PostsRoutes = Router();

PostsRoutes.post("/create/", CreatePostController);
PostsRoutes.get("/list/", ListPostController);

export default PostsRoutes;
