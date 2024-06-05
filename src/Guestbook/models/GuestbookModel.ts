import { Schema, model } from "mongoose";
import { IGuestbookComment } from "../types/GuestbookTypes";

const ProjectSchema = new Schema<IGuestbookComment>({
  guest: {
    name: { type: String, required: true },
    isGuest: { type: Boolean, default: true },
  },
  postData: {
    type: { type: String, default: "entry" },
    message: { type: String, required: true },
  },
  company: {
    name: { type: String, required: true },
    url: { type: String, required: true },
  },
  createdAt: {
    type: Date,
  },
});

const GuestbookModel = model<IGuestbookComment>(
  "GuestbookComment",
  ProjectSchema
);

export default GuestbookModel;
