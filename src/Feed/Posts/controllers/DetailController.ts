/**
 * @file DetailPostController.ts
 * @description Controller for retrieving details of a post.
 */

import { Request, Response } from "express";
import { isValidObjectId } from "mongoose";
import { logSuccess } from "@utils/LogHandle/logsMessages";
import PostModel from "../models/PostModel";

/**
 * Controller function to retrieve details of a post.
 * @param req Express Request object containing the post ID in the body.
 * @param res Express Response object to send the response.
 * @returns JSON response with the post details if successful, or an error message if unsuccessful.
 */
export const DetailPostController = async (req: Request, res: Response) => {
  // Extract id from params
  const { id } = req.params;
  // Console log
  logSuccess(`GET /api/cp/feed/post/detail/${id}/`);
  try {
    // Check if the ID is missing or invalid
    if (!id || !isValidObjectId(id)) {
      throw new Error("Missing or invalid id");
    }

    // Retrieve post details from the database
    const postDetail = await PostModel.findById(id).select("-__v");

    // Return the post details in JSON format
    return res.status(200).json(postDetail);
  } catch (error: any) {
    // Handle errors and return an error response
    return res.status(500).json({
      error: "Internal Server error",
    });
  }
};
