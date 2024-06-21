"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const emailSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        match: [/.+\@.+\..+/, "Please fill a valid email address"],
    },
});
const EmailModel = (0, mongoose_1.model)("Email", emailSchema);
exports.default = EmailModel;
