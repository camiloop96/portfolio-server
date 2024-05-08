"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const FeedRoutes_1 = __importDefault(require("../Feed/FeedRoutes"));
const EducationRoutes_1 = __importDefault(require("../AcademicBackground/EducationRoutes"));
const ProjectsRoutes_1 = __importDefault(require("../Projects/routes/ProjectsRoutes"));
const AppRoutes = (0, express_1.Router)();
AppRoutes.use("/feed/", FeedRoutes_1.default);
AppRoutes.use("/education/", EducationRoutes_1.default);
AppRoutes.use("/projects/", ProjectsRoutes_1.default);
exports.default = AppRoutes;
