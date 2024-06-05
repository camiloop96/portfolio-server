"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CreateController_1 = require("../controller/CreateController");
const ListController_1 = require("../controller/ListController");
const GuestbookRoutes = (0, express_1.Router)();
GuestbookRoutes.get("/list/", ListController_1.GuestbookCommentListController);
GuestbookRoutes.post("/create/", CreateController_1.GuestbookCommentCreateController);
exports.default = GuestbookRoutes;
