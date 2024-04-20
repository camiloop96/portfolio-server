"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const FeedRoutes_1 = __importDefault(require("../Feed/FeedRoutes"));
const AppRoutes = (0, express_1.Router)();
AppRoutes.use("/feed/", FeedRoutes_1.default);
exports.default = AppRoutes;
