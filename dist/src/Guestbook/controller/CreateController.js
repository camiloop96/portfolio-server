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
exports.GuestbookCommentCreateController = void 0;
const GuestbookModel_1 = __importDefault(require("../models/GuestbookModel"));
const GuestbookCommentCreateController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Verificación de nulidad
        const proyectItemRequest = req.body || {};
        const requiredFields = [
            "name",
            "company",
            "url",
            "message",
        ];
        // Verificar que todos los campos obligatorios estén presentes
        const missingFields = requiredFields.filter((field) => !proyectItemRequest[field]);
        if (missingFields.length > 0) {
            return res.status(400).json({
                error: `Los campos ${missingFields.join(", ")} son obligatorios.`,
            });
        }
        // Create
        const guestbookData = req.body;
        yield GuestbookModel_1.default.create({
            guest: {
                name: guestbookData.name,
                avatar: guestbookData.avatar,
            },
            postData: {
                message: guestbookData.message,
            },
            company: {
                name: guestbookData.company,
                url: guestbookData.url,
            },
            createdAt: new Date(Date.now()),
        });
        res.status(201).json({
            message: "Gracias por tu comentario",
        });
    }
    catch (error) {
        return res.status(500).json({
            error: "Error interno en el servidor",
        });
    }
});
exports.GuestbookCommentCreateController = GuestbookCommentCreateController;
