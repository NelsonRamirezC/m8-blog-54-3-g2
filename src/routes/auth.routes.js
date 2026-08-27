import express from "express";
import * as authController from "../controllers/auth.controllers.js";
import validaBody from "../middlewares/validaBody.js";

const router = express.Router();


//REGISTRAR NUEVOS USUARIOS
router.post("/registro", validaBody, authController.registroUsuario);


//AUTENTICAR USUARIOS



export default router;