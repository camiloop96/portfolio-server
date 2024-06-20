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
exports.GetImagesProjectController = void 0;
const ProjectModel_1 = __importDefault(require("../models/ProjectModel"));
const GetImagesProjectController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Request
        let { id } = req.params;
        // Comprobacion de nulidad
        if (!id) {
            return res.status(400).json({
                error: "Falta id de proyecto",
            });
        }
        // Busqueda de proyecto
        let projectExist = yield ProjectModel_1.default.findById(id);
        // Comprobacion de nulidad
        if (!projectExist) {
            return res.status(400).json({
                error: "Proyecto no existe",
            });
        }
        const images = projectExist.images;
        return res.status(200).json(images);
    }
    catch (error) {
        return res.status(500).json({
            error: "Error interno en el servidor",
        });
    }
});
exports.GetImagesProjectController = GetImagesProjectController;
