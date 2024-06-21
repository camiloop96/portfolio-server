"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CreateEmailController_1 = require("./controller/CreateEmailController");
const EmailRoutes = (0, express_1.Router)();
EmailRoutes.post("/register/", CreateEmailController_1.CreateEmailController);
exports.default = EmailRoutes;
