"use strict";
/**
 * @file DetailPostController.ts
 * @description Controller for retrieving details of a post.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailPostController = void 0;
const mongoose_1 = require("mongoose");
const logsMessages_1 = require("../../../utils/LogHandle/logsMessages");
const PostModel_1 = __importDefault(require("../models/PostModel"));
/**
 * Controller function to retrieve details of a post.
 * @param req Express Request object containing the post ID in the body.
 * @param res Express Response object to send the response.
 * @returns JSON response with the post details if successful, or an error message if unsuccessful.
 */
const DetailPostController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Extract id from params
    const { id } = req.params;
    // Console log
    (0, logsMessages_1.logSuccess)(`GET /api/cp/feed/post/detail/${id}/`);
    try {
        // Check if the ID is missing or invalid
        if (!id || !(0, mongoose_1.isValidObjectId)(id)) {
            throw new Error("Missing or invalid id");
        }
        // Retrieve post details from the database
        const postDetail = yield PostModel_1.default.findById(id).select("-__v");
        // Return the post details in JSON format
        return res.status(200).json(postDetail);
    }
    catch (error) {
        // Handle errors and return an error response
        return res.status(500).json({
            error: "Internal Server error",
        });
    }
});
exports.DetailPostController = DetailPostController;
