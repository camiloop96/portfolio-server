"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProjectSchema = new mongoose_1.Schema({
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
const GuestbookModel = (0, mongoose_1.model)("GuestbookComment", ProjectSchema);
exports.default = GuestbookModel;
