"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProjectSchema = new mongoose_1.Schema({
    title: {
        english: { type: String, required: true },
        spanish: { type: String, required: true },
    },
    subtitle: {
        english: { type: String, required: true },
        spanish: { type: String, required: true },
    },
    description: {
        short: {
            english: { type: String, required: true },
            spanish: { type: String, required: true },
        },
        full: {
            english: { type: String, required: true },
            spanish: { type: String, required: true },
        },
    },
    images: [
        {
            _id: { type: String, required: true },
            source: { type: String, required: true },
            alt: { type: String, required: true },
        },
    ],
    tagList: [{ type: String, required: true }],
    githubLink: { type: String },
    deployLink: { type: String },
    isPrivate: { type: Boolean, required: true },
    isOwn: { type: Boolean, required: true },
    detail: {
        requirements: {
            english: { type: String, required: true },
            spanish: { type: String, required: true },
        },
        features: [
            {
                english: { type: String, required: true },
                spanish: { type: String, required: true },
            },
        ],
        roles: [
            {
                english: { type: String, required: true },
                spanish: { type: String, required: true },
            },
        ],
        challenges: [
            {
                english: { type: String, required: true },
                spanish: { type: String, required: true },
            },
        ],
        learnings: [
            {
                english: { type: String, required: true },
                spanish: { type: String, required: true },
            },
        ],
    },
    license: {
        english: { type: String, required: true },
        spanish: { type: String, required: true },
    },
});
const ProjectModel = (0, mongoose_1.model)("Project", ProjectSchema);
exports.default = ProjectModel;
