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
exports.CreatePostController = void 0;
const dateManager_1 = require("../../../../utils/dateManager");
const PostModel_1 = __importDefault(require("../models/PostModel"));
const CreatePostController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`${(0, dateManager_1.getCurrentDate)()} POST api/camilo-polania/feed/post/create`);
    // Obtencion del cuerpo del json
    let { type, hasTitle, content, hasFlags } = req.body;
    // Request
    let postRequest = req.body || {};
    // Verificacion de nulidad
    const requiredFiels = ["type", "hasTitle", "content", "hasFlags"];
    const missingFields = requiredFiels.filter((field) => !postRequest[field]);
    if (missingFields.length > 0) {
        return res.status(400).json({
            error: `Los campos ${missingFields.join(", ")} son obligatorios`,
        });
    }
    console.log(type);
    // Verificacion de typos de post
    if (type !== "image" && type !== "text" && type !== "video") {
        return res.status(400).json({
            error: `Tipo ${type} no válido`,
        });
    }
    try {
        let savePost = new PostModel_1.default();
        savePost.postData = postRequest;
        savePost.createdAt = new Date(0);
        yield savePost.save();
        return res.status(200).json({
            message: "Post creado",
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Error interno en el servidor",
        });
    }
});
exports.CreatePostController = CreatePostController;
