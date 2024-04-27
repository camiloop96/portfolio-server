import { Schema, model } from "mongoose";
import { IEducation } from "../types/EducationTypes";

const educationSchema: Schema = new Schema<IEducation>({
  date: {
    english: { type: String, required: true },
    spanish: { type: String, required: true },
  },
  career: {
    english: { type: String, required: true },
    spanish: { type: String, required: true },
  },
  institute: { type: String, required: true },
  locationCareer: { type: String, required: true },
  description: {
    english: { type: String, required: true },
    spanish: { type: String, required: true },
  },
});

const EducationModel = model<IEducation>("Education", educationSchema);

export default EducationModel;
