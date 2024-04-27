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
exports.CreateEducationItem = void 0;
const EducationModel_1 = __importDefault(require("../models/EducationModel"));
const CreateEducationItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let educationRequest = req.body || {};
    let { date, career, institute, locationCareer, description } = educationRequest;
    try {
        if (!educationRequest) {
            return res.status(400).json({
                error: "JSON no proporcionado",
            });
        }
        if (!date || !career || !institute || !locationCareer || !description) {
            return res.status(400).json({
                error: "Faltan campos obligatorios",
            });
        }
        const newEducation = new EducationModel_1.default(educationRequest);
        newEducation.save();
        res.status(200).json({
            message: "Creado con éxito",
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.CreateEducationItem = CreateEducationItem;
