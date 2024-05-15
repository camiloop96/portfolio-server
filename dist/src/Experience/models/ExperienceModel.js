"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const experienceSchema = new mongoose_1.Schema({
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
const ExperienceModel = (0, mongoose_1.model)("Experience", experienceSchema);
exports.default = ExperienceModel;
