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
exports.ProjectCreateController = void 0;
const ProjectModel_1 = __importDefault(require("../models/ProjectModel"));
const ProjectCreateController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Verificación de nulidad
        const proyectItemRequest = req.body || {};
        const requiredFields = [
            "title",
            "subtitle",
            "description",
            "images",
            "tagList",
            "isPrivate",
            //   "isOwn",
            "detail",
            "category"
        ];
        // Verificar que todos los campos obligatorios estén presentes
        const missingFields = requiredFields.filter((field) => !proyectItemRequest[field]);
        if (missingFields.length > 0) {
            return res.status(400).json({
                error: `Los campos ${missingFields.join(", ")} son obligatorios.`,
            });
        }
        // Create
        const projectData = req.body;
        yield ProjectModel_1.default.create(projectData);
        res.status(201).json({
            message: "Proyecto creado",
        });
    }
    catch (error) {
        return res.status(500).json({
            error: "Error interno en el servidor",
        });
    }
});
exports.ProjectCreateController = ProjectCreateController;
