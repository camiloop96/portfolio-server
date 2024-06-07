import { Schema, model } from "mongoose";
import { IPost } from "../types/PostTypes";

// Esquema para el documento de publicación
const postSchema = new Schema<IPost>({
  postData: {
    type: {
      type: String,
      required: true,
      enum: ["text", "image", "video"],
    },
    photoLink: {
      source: String,
      alt: String,
    },
    hasTitle: { type: Boolean, required: true },
    title: { type: String },
    content: { type: String, required: true },
    hasFlags: { type: Boolean, required: true },
    moodFlags: [
      {
        _id: { type: String, required: true },
        emoji: { type: String, required: true },
        flagTitle: { type: String, required: true },
        backgroundColor: { type: String, required: true },
        color: { type: String, required: true },
      },
    ],
  },
  createdAt: { type: Date, required: true },
  likes: { type: Number, default: 0 },
  isPinned: { type: Boolean, default: false },
});

// Creación del modelo utilizando el esquema definido
const PostModel = model<IPost>("Post", postSchema);

export default PostModel;
