"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const educationSchema = new mongoose_1.Schema({
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
const EducationModel = (0, mongoose_1.model)("Education", educationSchema);
exports.default = EducationModel;
