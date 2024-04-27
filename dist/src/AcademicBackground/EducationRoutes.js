"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CreateEducationItem_1 = require("./controllers/CreateEducationItem");
const ListEducationItem_1 = require("./controllers/ListEducationItem");
const EducationRoutes = (0, express_1.Router)();
EducationRoutes.post("/create/", CreateEducationItem_1.CreateEducationItem);
EducationRoutes.get("/list/", ListEducationItem_1.ListEducationItem);
exports.default = EducationRoutes;
