import { Schema, model } from "mongoose";
import { IEmail } from "../types/EmailTypes";

const emailSchema: Schema = new Schema<IEmail>({
  email: {
    type: String,
    required: true,
    unique: false,
    trim: true,
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
  },
});

const EmailModel = model<IEmail>("Email", emailSchema);

export default EmailModel;
