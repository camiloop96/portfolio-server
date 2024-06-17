"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CreateController_1 = require("./controllers/CreateController");
const DetailController_1 = require("./controllers/DetailController");
const ListController_1 = require("./controllers/ListController");
const PostsRoutes = (0, express_1.Router)();
PostsRoutes.post("/create/", CreateController_1.CreatePostController);
PostsRoutes.get("/list/", ListController_1.ListPostController);
PostsRoutes.get("/detail/:id/", DetailController_1.DetailPostController);
exports.default = PostsRoutes;
