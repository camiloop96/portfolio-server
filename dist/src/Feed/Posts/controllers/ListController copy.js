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
exports.ListPostController = void 0;
const PostModel_1 = __importDefault(require("../models/PostModel"));
// Función para obtener todas las publicaciones
const ListPostController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield PostModel_1.default.find().sort({ isPinned: -1, createdAt: -1 });
        return res.status(200).json({
            mesage: "Posts obtenidos con éxido",
            payload: posts,
        });
    }
    catch (error) {
        return res.status(500).json({
            error: "Error interno en el servidor",
        });
    }
});
exports.ListPostController = ListPostController;
