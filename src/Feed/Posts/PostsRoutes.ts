import { Router } from "express";
import { CreatePostController } from "./controllers/CreateController";
import { DetailPostController } from "./controllers/DetailController";
import { ListPostController } from "./controllers/ListController";

const PostsRoutes = Router();

PostsRoutes.post("/create/", CreatePostController);
PostsRoutes.get("/list/", ListPostController);
PostsRoutes.get("/detail/:id/", DetailPostController);

export default PostsRoutes;
