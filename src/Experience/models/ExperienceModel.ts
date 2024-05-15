import { Schema, model } from "mongoose";
import { IExperience } from "../types/ExperienceTypes";

const experienceSchema: Schema = new Schema<IExperience>({
  date: {
    english: { type: String, required: true },
    spanish: { type: String, required: true },
  },
  position: {
    english: { type: String, required: true },
    spanish: { type: String, required: true },
  },
  company: { type: String, required: true },
  locationJob: { type: String, required: true },
  responsabilities: [
    {
      english: { type: String, required: true },
      spanish: { type: String, required: true },
    },
  ],
});

const ExperienceModel = model<IExperience>("Experience", experienceSchema);

export default ExperienceModel;
