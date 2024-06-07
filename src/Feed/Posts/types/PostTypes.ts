import { Document, Types } from "mongoose";

export interface IPost extends Document {
  _id?: Types.ObjectId;
  postData: {
    type: string;
    photoLink?: {
      source: string;
      alt: string;
    };
    hasTitle: boolean;
    title?: string;
    content: string;
    hasFlags: boolean;
    moodFlags: {
      _id?: string;
      emoji: string;
      flagTitle: string;
      backgroundColor: string;
      color: string;
    }[];
  };
  createdAt: Date;
  likes: number;
  isPinned: boolean;
}
