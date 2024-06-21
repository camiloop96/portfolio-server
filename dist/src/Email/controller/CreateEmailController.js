"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEmailController = void 0;
const EmailModel_1 = __importDefault(require("../model/EmailModel"));
// Create a new email
const CreateEmailController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ error: "Email is required" });
        }
        const existEmail = yield EmailModel_1.default.findOne({ email: email });
        if (existEmail) {
            return res.status(200).json({
                message: "Tu correo ya esta registrado",
            });
        }
        const newEmail = new EmailModel_1.default({ email });
        yield newEmail.save();
        res
            .status(201)
            .json({ message: "Email created successfully", data: newEmail });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.CreateEmailController = CreateEmailController;
