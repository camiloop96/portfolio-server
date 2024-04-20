"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PostsRoutes_1 = __importDefault(require("./Posts/PostsRoutes"));
const FeedRoutes = (0, express_1.Router)();
FeedRoutes.use("/post/", PostsRoutes_1.default);
exports.default = FeedRoutes;
