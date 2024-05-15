"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CreateExperienceItem_1 = require("./controllers/CreateExperienceItem");
const ListExperienceItem_1 = require("./controllers/ListExperienceItem");
const ExperienceRoutes = (0, express_1.Router)();
ExperienceRoutes.post("/create/", CreateExperienceItem_1.CreateEducationItem);
ExperienceRoutes.get("/list/", ListExperienceItem_1.ListEducationItem);
exports.default = ExperienceRoutes;
