import { Router } from "express";
import { CreateEmailController } from "./controller/CreateEmailController";

const EmailRoutes = Router();

EmailRoutes.post("/register/", CreateEmailController);

export default EmailRoutes;
